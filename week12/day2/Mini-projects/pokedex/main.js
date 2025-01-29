var allPokemons = []
var viewed = [] // global valiable to store all viewed pokemons to navigate <-- and -->
var currentPokemonIdx = -1

async function fetchAllPokemons(){
    try{
        let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')

        if (pokemons.ok){
            try{
                pokemons = pokemons.json()
                return pokemons

            } catch (error){
                console.error(error)// add msg to display
            }
        }
    } catch (error){
        console.error(error)// add msg to display
    }
}

function showPokemon(pokemon){
    const output = document.getElementById('output')
    output.innerHTML = ''

    const name = document.createElement('p')
    name.textContent = `Name: ${pokemon.name}`

    const id = document.createElement('p')
    id.textContent = `Pokemon N${pokemon.id}`

    const height = document.createElement('p')
    height.textContent = `Height: ${pokemon.height}cm`

    const weight = document.createElement('p')
    weight.textContent = `Weight: ${pokemon.weight}gr`

    const type = document.createElement('p')
    type.textContent = `Type: ${pokemon.types[0].type.name}`

    output.appendChild(name)
    output.appendChild(id)
    output.appendChild(height)
    output.appendChild(weight)
    output.appendChild(type)

    const image = document.getElementById('pokemonImg')
    image.src = pokemon.sprites.back_default

}

async function getPokemonInfo(url) {
    try{
        const pokemonObj = await fetch(url)
        if (pokemonObj.ok){
            try{
                const pokemonInfo = await pokemonObj.json()
                return pokemonInfo

            } catch (error) {
                console.error(error)
            }
        }
    } catch (error){
        console.error(error)
    }
}

function showError(msg){
    console.log('error ocured: ', msg)
}

function spinnerOn(){
    const parent = document.getElementById('output')
    const spinner = document.createElement('div')
    spinner.classList.add('spinner')
    spinner.id = 'spinner'
    parent.appendChild(spinner)
}

function spinnerOff(){
    const spinner = document.getElementById('spinner')
    if (spinner){
        spinner.remove()
    }
}

async function randomPokemon(arr){

    const randNum = Math.floor(Math.random() * 100)
    const randPokemon = arr[randNum]
    const fullPokemonInfo = await getPokemonInfo(randPokemon.url)

    if (fullPokemonInfo){
        showPokemon(fullPokemonInfo)
        viewed.push(fullPokemonInfo)
        currentPokemonIdx++
        spinnerOff()

    } else {

        spinnerOff()        
        showError('cant get full information')
    }
}

function getPrevPokemon(){
    if (currentPokemonIdx > 0){
        const prevPokemon = viewed[currentPokemonIdx - 1]
        currentPokemonIdx--
        return prevPokemon
    }
}

function getNextPokemon(){
    if (currentPokemonIdx < viewed.length - 1){
        const nexPokemon = viewed[currentPokemonIdx + 1]
        currentPokemonIdx++
        return nexPokemon
    }
}

async function main(){
    allPokemons = await fetchAllPokemons()
    const allPokemonsArr = allPokemons.results // 100 pokemons

    const randomPokemonBtn = document.getElementById('randomPokemonBtn')
    randomPokemonBtn.addEventListener('click', (event) => {
        event.preventDefault()
        spinnerOn()
        randomPokemon(allPokemonsArr)
    })

    const prevBtn = document.getElementById('prev')
    prevBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const prevPokemon = getPrevPokemon()
        if (prevPokemon){
            showPokemon(prevPokemon)
        }
        
    })

    const nextBtn = document.getElementById('next')
    nextBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const nextPokemon = getNextPokemon()
        if (nextPokemon){
            showPokemon(nextPokemon)
        }
        
    })
}

main()

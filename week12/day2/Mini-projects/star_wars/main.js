async function bringPersonage(){
    let allPersonagesUrl = 'https://www.swapi.tech/api/people/'
    const randInt = Math.floor(Math.random() * 10)
    try{
        let allPersonages = await fetch(allPersonagesUrl) //fetch first 10 by api config
        if (allPersonages.ok){
            let allPersonagesJson = await allPersonages.json()
    
            let randomPersonage = await allPersonagesJson.results[randInt]
            let randPersonageUID = randomPersonage.uid

            try{
                let randPersonageiInfo = await fetch(`https://www.swapi.tech/api/people/${randPersonageUID}/`)
                let randPersonageiInfoJson = await randPersonageiInfo.json()
                return randPersonageiInfoJson.result.properties
            } catch (error){
                console.error('personage wasnt fetch')
            }
        }
    } catch (error){
        console.error('list wasnt fetched')
    }

    
}

async function generate(){

    const spinner = document.createElement('div')
    spinner.id = 'spinner'
    spinner.textContent = 'Loading...'
    document.getElementsByClassName('output')[0].innerHTML = ''
    document.getElementsByClassName('output')[0].appendChild(spinner)
    console.log('on', spinner)

    try{
        const personage = await bringPersonage()
    } catch (error){
        console.error(error)
    }
    
    displayPersonageInfo(personage)

    spinner.style.display = 'none';
    console.log('off', spinner)


}

async function displayPersonageInfo(personage){
    try{
        const homeworldInfo = await fetch(personage.homeworld)
        const homeworldInfoJson = await homeworldInfo.json()
    } catch (error){
        console.error(error)
    }
    
    const homeworldName = homeworldInfoJson.result.properties.name

    const dest = document.getElementsByClassName('output')[0]
    const info = document.createElement('div')

    const name = document.createElement('p')
    name.textContent = `Name: ${personage.name}`
    name.classList.add('name')
    info.appendChild(name)

    const height = document.createElement('p')
    height.textContent = `Height: ${personage.height}`
    info.appendChild(height)

    const gender = document.createElement('p')
    gender.textContent = `Gender: ${personage.gender}`
    info.appendChild(gender)

    const birthYear = document.createElement('p')
    birthYear.textContent = `Birth year: ${personage.birth_year}`
    info.appendChild(birthYear)

    const homeworld = document.createElement('p')
    homeworld.textContent = `Home world: ${homeworldName}`
    info.appendChild(homeworld)

    dest.appendChild(info)

}

function main(){
    const findBtn = document.getElementById('findBtn')
    findBtn.addEventListener('click', generate)
    
}

main()
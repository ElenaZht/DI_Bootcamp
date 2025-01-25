function removeGif(event){
    const gifElement = event.target.closest('.gif');
    if (gifElement) {
        gifElement.remove();
    }
}

function removeAllGifs(){
    let allGifs = document.getElementsByClassName('gif')
    if (allGifs.length){
        [...~allGifs].forEach(element => {
             element.remove()
        });
    }
    
}

function createElement(url){
    const newElement = document.createElement('div')
    newElement.classList.add('gif')
    const img = document.createElement('img')
    img.src = url
    const xButton = document.createElement('button')
    xButton.textContent = 'x'
    xButton.addEventListener('click', removeGif)
    newElement.appendChild(img)
    newElement.appendChild(xButton)

    const container = document.getElementsByClassName('output')[0]
    container.appendChild(newElement)
}

async function inputHandler(event){
    event.preventDefault()
    // search term extracting
    const input = document.getElementById('inputCategory')
    const searchTerm = input.value.toLowerCase()
    if (searchTerm !== ''){
        // request to api
        const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
        const requestUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`
        const response = await fetch(requestUrl)
        if (response.ok){
            const resJson = await response.json()
            const gifs = await resJson.data
            const randomIdx = Math.floor(Math.random() * gifs.length)
            const gifUrl = gifs[randomIdx].images.downsized.url
        
            // displaying result
            createElement(gifUrl)
        } else {
            console.error('no valuble results', response)
        }
    }

}

function main(){
    const searchBtn = document.getElementById('searchBtn')
    searchBtn.addEventListener('click', inputHandler)

    const remAllBtn = document.createElement('button')
    remAllBtn.textContent = 'x all'
    remAllBtn.id = 'removeAll'
    remAllBtn.addEventListener('click', removeAllGifs)
    document.getElementsByClassName('output')[0].appendChild(remAllBtn)
}

main()
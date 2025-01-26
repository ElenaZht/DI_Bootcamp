// Retrieve the input’s value and display the hour of the sunrise 
// for both city ONLY when both promises are resolved
// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

function displayResults(results){
    const output = document.getElementsByClassName('output')[0]
    output.innerHTML = ""

    const newRes1 = document.createElement('div')
    newRes1.textContent = `Sunrise in the city1: ${results[0]}`

    const newRes2 = document.createElement('div')
    newRes2.textContent = `Sunrise in the city2: ${results[1]}`

    output.appendChild(newRes1)
    output.appendChild(newRes2)

}

function inputHandler(e){
    e.preventDefault()
    const lat1 = document.getElementById('lat1').value.trim()
    const lat2 = document.getElementById('lat2').value.trim()

    const lon1 = document.getElementById('lon1').value.trim()
    const lon2 = document.getElementById('lon2').value.trim()

    if (lat1 !== "" || lat2 !== "" || lon1 !== "" || lon2 !== ""){

        return Promise.all([
            getSunrise(lat1, lon1),
            getSunrise(lat2, lon2)
        ])
        .then(results => {
            displayResults(results)
        })
        .catch(err => console.error(err))

    } else {
        console.log(lat1, lat2, lon1, lon2)
        alert('pleace, fill all the fields')
        return
    }
}

async function getSunrise(lat, lon) {
    let reqUrl1 = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`
    try{
        const response1 = await fetch(reqUrl1)
        if (response1.ok){
            const respJson = await response1.json()
            return respJson.results.sunrise
        }
    } catch(error){
        return `Error: ${error.message}`
    }

}

function main(){
    const getSunriseBtn = document.getElementById('getSunrise')
    getSunriseBtn.addEventListener('click', inputHandler)
}

main()
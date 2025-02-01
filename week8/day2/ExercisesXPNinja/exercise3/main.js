async function getLocation() {
    url = 'http://ip-api.com/json/'
    try{
        const response = await fetch(url)
        if (!response){
            alert('no response from api')
            return
        }

        try{
            const responseJson = await response.json()
            if (responseJson.status !== 'success'){
                alert('failed to geolocate: ', responseJson.message)
                return
            }

            if (responseJson.lat && responseJson.lon){
                return [responseJson.lat, responseJson.lon]
            }

        } catch (error){
            console.error('failed to parse response: ', error)
        }

    } catch (error){
        console.error(error)
    }
}

function displayLocation(location){
    const lat = document.getElementById('latitude')
    lat.textContent = location[0]

    const lon = document.getElementById('longitude')
    lon.textContent = location[1]

    document.getElementById('output').style.display = 'flex'
}

function main(){
    const geoBtn = document.getElementById('geolocate')
    geoBtn.addEventListener('click', async(e) => {
        e.preventDefault()
        const location = await getLocation()
        displayLocation(location)
    })
}
main()
//Use the axios package to make an HTTP GET request to a public API 
// (e.g., weather data or news data) and display the fetched data in the terminal.
import axios from 'axios'


export async function getMyWeather(){
    const openWeatherApiKey = process.env.API_KEY
    const city = 'Lod'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}`

    try {
        const response = await axios.get(url)
        if (response.status === 200 && response.data.main.temp){
            console.log('now temperature in Lod ', (response.data.main.temp - 273.15).toFixed(0), 'degree')

        } else {
            console.error('failed to fetch weather')
        }


    } catch (error) {

       console.error(error) 
    }


}
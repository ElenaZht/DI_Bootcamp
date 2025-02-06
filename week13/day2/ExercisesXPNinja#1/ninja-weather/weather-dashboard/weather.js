import axios from 'axios'
import chalk from 'chalk'
import 'dotenv/config' //api key in .env


export async function getWeather(city) {
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await axios.get(url)
    if (response && response.data){
        // return {
        //     'temp': (response.data.main.temp - 273.15),
        //     'desc': response.data.weather[0].description,
        //     'wind': response.data.wind.speed
        //  }
         console.log(
            chalk.bgYellow(`now in ${chalk.magenta(city)} ${chalk.green(((response.data.main.temp - 273.15)).toFixed(0))}C, ${chalk.blue(response.data.weather[0].description)} and wind ${chalk.red(response.data.wind.speed)}m/s`)
        )
    } else {
        console.error('no response valuble data')
        return false
    }

}
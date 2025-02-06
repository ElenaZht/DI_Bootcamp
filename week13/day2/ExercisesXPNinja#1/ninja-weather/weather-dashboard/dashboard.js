import readline from 'readline'
import { getWeather } from './weather.js'

export function userInputWeather(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      
      rl.question('Enter city name ', (city) => {
        try{
            getWeather(city)

        } catch (error){
            console.error(error)
        }
        
        rl.close();
      });
}
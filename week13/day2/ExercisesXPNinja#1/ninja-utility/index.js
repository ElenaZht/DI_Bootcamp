// Implement the command-line utility using 
// the commander package:
// Use the commander package to define different commands 
// (e.g., greet, fetch, read).
// Map each command to its respective module in the commands 
// directory.
// Parse command-line arguments and execute the appropriate 
// command
import { Command } from  'commander'
import { colorfulMessege } from './commands/greet.js'
import { getMyWeather } from './commands/fetch.js'
import { readContent } from './commands/read.js'

import * as dotenv from 'dotenv'
dotenv.config()

function createCli(){

    //creating my cli object
    const mycli = new Command()
    mycli
        .name('mycli')
        .description('A simple CLI app')
        .version('1.0.0')

    //add command greet
    mycli
        .command('greet')
        .description('Display colorful messege')
        .action(() =>{
            colorfulMessege() 
        })

    //add command fetch
    mycli
        .command('fetch')
        .description('Fetch currend weather in Lod, Israel')
        .action(() => {
            getMyWeather()
        })

    //add command read
    mycli
        .command('read <filePath>')
        .description('Read content of provided file')
        .action((filePath) => {
            
            readContent(filePath)
        });

    //parse user input
    mycli.parse(process.argv)
}

function main(){
    createCli()
}
main()
import {readFile, writeFile} from './fileManager.js'

//Use the imported functions to read the content
//  of the “Hello World.txt” text file and then
//  write to the “Bye World.txt” with the content
//  “Writing to the file”.
readFile('./Hello_World.txt').then((data) => {
    console.log(data)
}).catch(err => console.error(err))

writeFile('./Bye_World.txt', 'Writing to the file').then((data) => {
    console.log(data)
}).catch(err => console.error(err))

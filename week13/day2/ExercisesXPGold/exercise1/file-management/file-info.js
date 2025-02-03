import fs from 'fs'
import path from'path'


export function aboutFile(){
//Use the path.join function to create a 
// file path to the example.txt file within 
// the data directory.
const examplePath = path.join(__dirname, 'data', 'example.txt')
console.log('path: ', examplePath)

//Use the fs.existsSync function to check 
// if the file exists.
console.log('is path valid: ', fs.existsSync(examplePath))

console.log('file info: ', fs.statSync(examplePath))
}

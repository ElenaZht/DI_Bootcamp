import {greet} from './greeting.js'
import {colorfulMessege} from './colorful-message.js'
import {readContent} from './files/read-file.js'

function main(){
    console.log(greet('Dima'))
    colorfulMessege('Hello, Dimaaa')
    readContent('./files/file-data.txt')
}
main()
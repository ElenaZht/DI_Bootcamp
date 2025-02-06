// Use the fs module to read and display the content 
// of a specified file in the terminal.
import fs from 'fs'

export async function readContent(filePath){
    try {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err){
                console.error(err)
                return
            }

            console.log('content of ', filePath, ' file: ', data)
        })

    } catch (error) {
        console.error(error)
    }
}
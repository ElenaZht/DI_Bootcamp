import fs from 'fs'

export async function readContent(fileName) {
    try {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err){
                console.error(err)
                return
            }

            console.log(fileName,':', data)
        })

    } catch (error) {
        console.error(error)
    }
}
// function main(){
//     readContent('file-data.txt')
// }
// main()
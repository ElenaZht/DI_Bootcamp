import fs from 'fs'

export async function readFile(fileName){
    try{
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err){
                console.error(err)
                return
            }

            console.log(data)
            return data
        })
        
    } catch (err){

        console.error(err)
    }
}
export async function writeFile(fileName, msg){
    try {
        fs.writeFile(fileName, msg, (err, data) => {
            if (err){
                console.error(err)
                return
            }

            console.log(`${msg} was written to ${fileName}`)
            return data
        })
        
        
    } catch (error) {

        console.error(error)
    }
}

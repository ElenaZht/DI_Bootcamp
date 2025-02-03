import fs from 'fs'

function readAllFiles(dirPath){
    //read the list of files in a specified 
    // directory and display their names in the terminal.
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(err)
            return
        }
    
        console.log('files: ', files)
    })
}
readAllFiles('./')
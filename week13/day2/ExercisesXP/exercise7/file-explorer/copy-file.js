import fs from 'fs'

function getText(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading the file:', err);
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}


function postText(fileName, text){
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, text, (err) => {
            if (err){
                console.error(err)
                reject(err)
            }

            resolve(true)
             
        })

    })    
}

async function main(){

    getText('source.txt')
    .then((data) => {
        postText('destination.txt', data)
        .then(() => console.log('done'))
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
    
    
}
main()
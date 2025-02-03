//Ask the user for his full name (example: “John Doe”), 
// and use the regular expression module to check the validity
//  of his answer:
// The name should contain only letters.
// The name should contain only one space.
// The first letter of each name should be upper cased.
const inquirer = require('inquirer')

async function getUserName(){
    const prompt = inquirer.createPromptModule()
    const userName = await prompt(
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?(only letters, one space, uppercased)',
    })
    return userName.name
}

function validateUserName(fullName){
    //one space
    const regex1 = new RegExp(' ', 'g')
    const occurrences = fullName.match(regex1)
    if (occurrences.length > 1 || occurrences.length == 0){
        console.log(fullName, ' is not valid: invalid number of spaces')
        return
    }

    //uppercased
    for (let word of fullName.split(' ')){
        if (word[0] !== word[0].toUpperCase()){
            console.log(fullName, ' is not valid: name should be capitalized')
            return
        }
    }

    //only letters
    const regex2 = /^[A-Za-z]+(?: [A-Za-z]+)?$/
    if (!regex2.test(fullName)){
        console.log(fullName, ' is not valid: should contain only letters and one space')
        return
    }

    //if valid
    console.log('YOUR NAME IS TOTALLY VALID')
}

async function main(){
    const userName = await getUserName()
    validateUserName(userName)
}
main()
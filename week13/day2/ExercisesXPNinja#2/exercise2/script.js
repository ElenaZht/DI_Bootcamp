import { getMinuts } from './date.js'

function main(){
    const myBirthDay = '1995-10-05'
    const myMinutes = getMinuts(myBirthDay)
    console.log(`if you was born on ${myBirthDay}, you lives already ${myMinutes} minutes`)

}
main()
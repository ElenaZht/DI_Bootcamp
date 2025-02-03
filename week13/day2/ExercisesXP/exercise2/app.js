import { people } from "./data.js"

function averageAge(arr){
    return people.reduce((acc, p) => acc + p.age, 0) / people.length
}

console.log(averageAge(people))
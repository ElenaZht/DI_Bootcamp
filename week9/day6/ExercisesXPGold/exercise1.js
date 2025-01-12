// Create a function called printFullName.
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`

// Destructure this object directly from the parameters 
// (ie. Look at the Advanced Object lesson - Part II : Object 
//     destructuring used as an assignment to a function)

function printFullName({first = '', last = ''}){
    return `Your full name is ${first} ${last}`
}

console.log(printFullName({first: 'Elie', last:'Schoppik'}))
//Create a function getDetails that takes a name and age 
// as input and returns a tuple containing the input 
// values and a greeting message.
// The tuple should contain multiple values of 
// different types

const getDetails = (name: string, age: number): [string, number, string] => {
    return [name, age, `hello, ${name}! You are ${age} years old.`]
}

console.log(getDetails('lena', 29))
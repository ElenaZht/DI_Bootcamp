// Create a generic function formatInput that takes 
// a parameter of type T constrained to have a toString() 
// method. Use type assertions to ensure the parameter is 
// treated as a string for formatting. The function should 
// format the input as a string.

const formatInput = <T extends {toString: () => string}>(value: T): string => {
    return value.toString()
}

console.log(formatInput(2)) // '2'
console.log(formatInput([])) // ''
console.log(formatInput(true)) // 'true'
// console.log(formatInput(null)) // error
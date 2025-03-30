//Description: Use union types to declare a variable 
// that can hold either a string or a number.
//Use union types to declare a variable id that can 
// be either a string or a number.

type strOrNum = string | number
const id: strOrNum = 123
const id2: strOrNum = 'lll'
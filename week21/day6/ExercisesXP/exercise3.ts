// Create a variable someValue of type any 
// and cast it to a string. Then, use it as a string.

let someValue: any = 12
someValue = 'abc'
console.log((someValue as string).length) // 3
console.log(typeof someValue) // string
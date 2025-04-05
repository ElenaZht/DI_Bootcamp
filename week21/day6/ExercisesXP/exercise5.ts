// Create a generic function logLength that takes 
// a parameter of type T constrained to types with a 
// length property (like string or Array). The function 
// should log the length.

const logLength = <T extends {length: number}>(value: T): number => {
    return value.length
}

console.log(logLength('abc')) // 3
console.log(logLength([])) // 0
// console.log(logLength({})) // Argument of type '{}' is not 
// assignable to parameter of type '{ length: number; }'
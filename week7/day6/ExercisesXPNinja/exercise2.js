// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

function capitalizeEven(str){
    let res = ''
    str.split('').forEach((element, index) => {
        if (index%2 === 0){
            res += element.toUpperCase()
        } else{
            res += element
        }
    })
    return res
}
function capitalizeOdd(str){
    let res = ''
    str.split('').forEach((element, index) => {
        if (index%2 === 0){
            res += element
        } else{
            res += element.toUpperCase()
        }
    })
    return res
}

console.log('from "abcdef" to ', capitalizeEven('abcdef'))
console.log('from "abcdef" to ', capitalizeOdd('abcdef'))
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
let cleanArray = array.filter(i => !!i)
console.log(cleanArray) //[15, -22, 47]
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length 
// (the second parameter), and the outcome should be represented in an array.
function clipper(str, size){
    let res = []
    let arr = str.split("")
    while (arr.length > 0){
        res.push(arr.splice(0, size).join(""))
    }
    return res
}
console.log(str, size, clipper('developers', 2)) //["de", "ve", "lo", "pe", "rs"]
console.log(str, size, clipper('developers', 3)) //["dev", "elo", "per", "s"]
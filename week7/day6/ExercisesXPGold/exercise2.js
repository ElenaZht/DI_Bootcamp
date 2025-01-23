// Write a JavaScript function to convert a string into an abbreviated form.
function abbrevName(name){
    const arr = name.split(' ')
    return arr[0] + ' ' + arr[1][0] + '.'
}
console.log(abbrevName("Robin Singh"));
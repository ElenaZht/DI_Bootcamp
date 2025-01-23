// Write a program to check whether a string is blank or not.
function isBlank(string){
    return string.trim() === ''
}
console.log(isBlank(''));
console.log(isBlank('abc'));
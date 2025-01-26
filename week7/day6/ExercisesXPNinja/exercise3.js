// Write a JavaScript function that checks whether a string is 
// a palindrome or not.

function isPalindrom(str){
    return str.split('').reverse() === str
}
console.log('madam ', isPalindrom('madam'))
console.log('abcd ', isPalindrom(''))
console.log('', isPalindrom(''))

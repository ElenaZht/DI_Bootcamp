const XRegExp = require('xregexp')

function extractNumbers(str){
    const numbers = str.match(/\d/g); 
    return numbers ? numbers.join('') : ''
}

console.log(extractNumbers('k5k3q2g5z6x9bn'), 'expected 532569')
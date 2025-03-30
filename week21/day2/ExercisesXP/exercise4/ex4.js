//Write a function that takes a number as input and 
// returns a string indicating whether the number is 
// positive, negative, or zero.
// Use if...else statements to control the flow of a program.
var numSign = function (num) {
    if (num > 0)
        return 'positive';
    if (num == 0)
        return 'zero';
    else
        return 'negative';
};
console.log('2 is ', numSign(2));
console.log('-2 is ', numSign(-2));
console.log('0 is ', numSign(0));

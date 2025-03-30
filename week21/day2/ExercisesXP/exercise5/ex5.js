//Create a function getDetails that takes a name and age 
// as input and returns a tuple containing the input 
// values and a greeting message.
// The tuple should contain multiple values of 
// different types
var getDetails = function (name, age) {
    return [name, age, "hello, ".concat(name, "! You are ").concat(age, " years old.")];
};
console.log(getDetails('lena', 29));

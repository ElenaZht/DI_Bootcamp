// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function kiloToGrams(weight){
    return weight * 1000
}
console.log(kiloToGrams(2)) // 2000

// Then, use function expression and invoke it.
let kiloToGrams = (weight) => weight * 1000
console.log(kiloToGrams(2)) // 2000

// Write in a one line comment, the difference between function declaration and function expression.
// **Answer: declaration incudes "function" keywird and name, when expression has no name and omit 
// "function" keyword. function declaration hoists so it can be invoked even before declaration, 
// when expression is not

// Finally, use a one line arrow function and invoke it.
console.log((w => w * 1000)(2)) // 2000
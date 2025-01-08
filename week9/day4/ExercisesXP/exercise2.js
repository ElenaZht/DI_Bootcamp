const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : 
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
colors.forEach((color, index) => {
    let suffix = index + 1 > 2 ? ordinal[0] : ordinal[index + 1]
    console.log(`${index + 1}${suffix} choice is ${color}.`)
})

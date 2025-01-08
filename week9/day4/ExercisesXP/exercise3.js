// Analyze these pieces of code before executing them. What will be the outputs ?
//------1------
const fruits = ["apple", "orange"]; // initialization and asignment of two arrays of strings
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];// creating a new array that consists 
// of 'bread', all the items from the vegetables array, 'chicken', and all the items from the fruits array.
console.log(result); // displaing new array
// * Answer: (6) ["bread", "carrot", "potato", "chick...]
// 0:"bread"
// 1:"carrot"
// 2:"potato"
// 3:"chicken"
// 4:"apple"
// 5:"orange"
//[[Prototype]]:[]

//------2------
const country = "USA"; // initializing variable
console.log([...country]); // displaying an array consists of country variable only
// * Answer: (3) ["U", "S", "A"] - the spread operator can work on any iterable object. 
// A string is also an iterable object

//------Bonus------
let newArray = [...[,,]]; // creating an array consists of items from [,,] - error
console.log(newArray); // displaying new array
// * Answer: (2) [undefined, undefined] - [,,] is array of empty slots( 'holes')
// When the spread operator encounters an empty slot, it replaces it with undefined 
// in the new array because undefined is the default value when accessing a non-existent
// or missing value in an array.
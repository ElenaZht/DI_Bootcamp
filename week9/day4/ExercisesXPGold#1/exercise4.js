// 1. Using a method, take this array 
const array = [[1],[2],[3],[[[4]]],[[[5]]]] 
// and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.
const flattenArray = array.flat(2) // .flat(2) flates array by 2 levels
console.log(flattenArray) // [1,2,3,[4],[5]]

// 2. Using a method, take this array 
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
// and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const flattenGreeting = greeting.map(subarr => subarr.join(" ")).flat() // flates by 1 level by default
console.log(flattenGreeting) //["Hello young grasshopper!","you are","learning fast!"]

// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
const greetingString = greeting.map(subarr => subarr.join(" ")).join(" ")
console.log(greetingString)// Hello young grasshopper! you are learning fast!

// Turn the trapped number 3 into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
let trap = [...trapped]
while (trap.some(element => Array.isArray(element))){
    trap = trap.flat()
}
console.log(trap)// [3]
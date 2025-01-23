let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer 
// the following questions. You have to create the logic by yourself.
// Use simple for loops.


// 1. Console.log the sum of all the numbers in the age array.
let sum = 0
for (let i of age){
    sum += i
}
console.log(sum)

// 2. Console.log the highest age in the array.
let max = 0
for (let i of age){
    if (i > max){
        max = i
    }
}
console.log(max)
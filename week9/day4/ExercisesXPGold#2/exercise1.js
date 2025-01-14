// Write a JavaScript program to find the sum of all elements in an array.
function sumArray(array){
    let sum = 0
    for (let el of array){
        if (typeof el === 'number'){
            sum += el
        }
    }
    return sum
}
console.log('sum 6 ', sumArray([1, 2, 3]))
console.log('sum 0 ', sumArray([]))
console.log('foreing element 4', sumArray([1, 'aa', 3]))
console.log('foreing element  4', sumArray([1, true, 3]))


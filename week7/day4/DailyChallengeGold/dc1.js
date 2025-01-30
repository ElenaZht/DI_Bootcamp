const numbers = [5,0,9,1,7,4,2,6,3,8];

// Using the .toString() method convert the array to a string.
const numString = numbers.toString()
console.log(numString)

// Using the .join()method convert the array to a string. 
// Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
const numStr1 = numbers.join()
const numStr2 = numbers.join('')
const numStr3 = numbers.join('+')
console.log(numStr1) // 5,0,9,1,7,4,2,6,3,8
console.log(numStr2) // 5091742638
console.log(numStr3) // 5+0+9+1+7+4+2+6+3+8


// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops 
// (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){ // iteration through the whole array
        for (let j=i+1; j < arr.length; j++){ // iteration through array starting from the current position, asuming everything left already sorted
            if (arr[i] < arr[j]){ // comperation the current and the next element
                let temp = arr[i] // swapping them if condition true
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(numbers))



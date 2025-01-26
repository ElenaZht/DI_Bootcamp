// Create a function called biggestNumberInArray(arrayNumber) 
// that takes an array as a parameter and returns the biggest 
// number.
// Note : This function should work with any array;
function biggestNumberInArray(arrayNumber){
    let max = -Infinity
    for (let item of arrayNumber){
        if (typeof item === 'number'){
            if (item > max){
                max = item
            }
        }
    }

    return (max === -Infinity) ? 0 : max
}

const array = [-1,0,3,100, 99, 2, 99] ;
console.log(biggestNumberInArray(array)) // should return 100 
const array2 = ['a', 3, 4, 2];
console.log(biggestNumberInArray(array2))  // should return 4 
const array3 = [];
console.log(biggestNumberInArray(array3))  // should return 0
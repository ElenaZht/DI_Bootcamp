// Create a function getFirstElement that takes an array 
// of number | string and uses type assertions to return 
// the first element as a string. Test with arrays of mixed types.

const getFirstElement = <T extends number | string>(arr: T[]):T => {
    return arr[0]
}

console.log(getFirstElement([1, 2, 3, 'a'])) // 1
console.log(getFirstElement(['b', '2', 3])) // b
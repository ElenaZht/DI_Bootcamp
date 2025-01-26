//Write a JS function that takes an array and returns a new 
// array with only unique elements.

function getUnique(arr){
    const set = new Set(arr)
    return Array.from(set)
}
const list1=[1,2,3,3,3,3,4,5]
console.log(getUnique(list1)) // expect [1,2,3,4,5]

const list2=[1,2,3,3,3,3,4,5]
console.log(getUnique(list2)) // expect [1,2,3,4,5]


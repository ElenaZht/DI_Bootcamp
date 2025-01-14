//Write a JavaScript program to remove duplicate items in an array.
function removeDuplicates(array){
    return Array.from(new Set(array))
}
console.log('[1, 2, 3 ]', removeDuplicates([1, 1, 2, 3, 3, 3]))
console.log('[] ', removeDuplicates([]))
console.log('[true, false] ', removeDuplicates([true, true, false, false]))
console.log('["a", "b", "a", "b", "c"] ', removeDuplicates(["a", "b", "c"]))
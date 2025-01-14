// Write a JavaScript function to find a word within a string.
// console.log(search_word('The quick brown fox', 'fox')); 
// "'fox' was found 1 times." 
function containsSubstring(srcString, target){
    let count = 0
    for (let word of srcString.split(" ")){
      if (word === target) count++
    }
    return `'${target}' was found ${count} times`
}
console.log(containsSubstring('The quick brown fox', 'fox')) //'fox' was found 1 times
console.log(containsSubstring('The fox quick fox brown fox', 'fox')) //'fox' was found 3 times
console.log(containsSubstring('The quick brown', 'fox')) //'fox' was found 0 times
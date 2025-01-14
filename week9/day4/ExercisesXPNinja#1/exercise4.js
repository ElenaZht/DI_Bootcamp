// Using this array 
const letters = ['x', 'y', 'z', 'z'];

//1. Use a for loop to get this output { x: 1, y: 1, z: 2 };
function countLetters(array){
    let res = {}
    for (let l of letters){
        if (res[l]){
            res[l]++
        } else {
            res[l] = 1
        }
    }
    return res
}
console.log(countLetters(letters)) //{x: 1, y: 1, z: 2}

//2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
function reduceLetters(array){
    let res = {}
    for (let l of letters){
        let count = letters.reduce((acc, el) => el === l ? acc + 1 : acc, 0)
        res[l] = count
    }
    return res
}
console.log(reduceLetters(letters)) //{x: 1, y: 1, z: 2}
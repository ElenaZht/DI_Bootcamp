// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

function repeter(str, times){
    let res = ''
    for (let i  = 0; i < times; i++){
        res += str
    }
    return res
}

console.log(repeter('Ha!',3));
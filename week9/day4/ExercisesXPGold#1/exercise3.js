// Using this code:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
// What is the value of i ?

// arrayNum is array of numbers
// newArray is array, produced applying map method on the arrayNum
// map's callback function recieves current number and i(index)
// on every number in the arrayNum function invokes console log and alert
// after that function returns current number multiplyed by 2
// as a result newArray represents as array of numbers from arrayNum multiplied by 2 - [2, 4, 8, 10, 16, 18]
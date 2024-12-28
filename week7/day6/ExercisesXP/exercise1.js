// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.
function displayNumbersDivisible(divisor){
    sum = 0
    for (let i = 0; i <= 500; i++){
        if (i % divisor == 0){
            console.log(i);
            sum += i;
        }
    }
    return sum
}

console.log('sum is ', displayNumbersDivisible(23))

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//A group of friends have decided to start a secret society. 
// The society’s name will be the first letter of each of
// their names sorted in alphabetical order.
// Hint: a string is an array of letters
let secret_name_arr = []
for (let name of names){
    secret_name_arr.push(name[0])
}
secret_name_arr.sort()
console.log(`secret society name is ${secret_name_arr.join('')}`)

// Console.log the name of their secret society. 
// The output should be “ABJKPS”
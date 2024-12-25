// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ['baby blue', 'pink', 'white', 'toupe', 'golden']
for (let i = 1; i <= colors.length; i++){
    console.log(`My #${i} choise is ${colors[i]}`);
}

for (let i = 1; i <= colors.length; i++){
    let suffix = 'th';
    switch (i) {
        case 1:
          suffix = 'st'
          break;
        case 2:
            suffix = 'nd';
            break;
        case 3:
            suffix = 'rd'
    }
    console.log(`My ${i + suffix} choise is ${colors[i]}`);
}
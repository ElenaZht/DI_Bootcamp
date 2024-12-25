// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt 
//(ie. Use the typeof method)
// i run it in js compiler
while(true){
    let num = prompt('enter any number: ');
    if (typeof +num === "number" && !isNaN(+num)){
        if (+num < 10){
            continue
        }
        console.log(`${num} is a good one!`)
        break
        
    } else {
        console.log(`${num} is not a number`)
    }
}

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// regular while loop, because we need to execute code after checking input data

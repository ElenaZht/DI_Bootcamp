// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
function changeEnough(itemPrice, amountOfChange){
    let change = {
        "quarter" : 0.25,
        "dime" : 0.10, 
        "nickel" : 0.05, 
        "penny" : 0.01
    }
    let total_money = amountOfChange[0] * change["quarter"] +
                    amountOfChange[1] * change["dime"] + 
                    amountOfChange[2] * change["nickel"] +
                    amountOfChange[3] * change["penny"]

    return total_money >= itemPrice
}

console.log(changeEnough(14.11, [2,100,0,0]) )// => returns false
console.log(changeEnough(0.75, [0,0,20,5])) // => returns true
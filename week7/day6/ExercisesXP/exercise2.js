const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Create an array called shoppingList with the following items: 
// “banana”, “orange”, and “apple”. It means that you have 1 banana, 
// 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"]

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
function myBill(){
    total = 0;
    for (let item of shoppingList){
        if (item in stock && stock[item] > 0){
            total += prices[item]
            stock[item] -= 1
        }
    }
    return total
}

// Call the myBill() function.
console.log(myBill())
console.log(stock)
// Bonus: If the item is in stock, decrease the item’s stock by 1
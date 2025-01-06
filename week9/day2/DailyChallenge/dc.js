let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries 
// object. Use the forEach method.
let displayGroceries = () => groceries['fruits'].forEach(f => console.log(f))

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
let cloneGroceries = () => {
    let user = client
    client = "Betty" 
    console.log(client) // Betty
    console.log(user) // John - first we asigned "John" to user, then asigned "Betty" to client, 
    // string is primitive data type so it is passed by value
    let shopping = groceries
    shopping['totalPrice'] = 35 // object is not primitive data type so it is passed by reference and change the origin
    console.log("groceries price ", groceries['totalPrice']) // 35

    shopping['other']['paid'] = false
    console.log("groceries paid ", groceries['other']['paid']) // false - same reasone - passing by reference
}


// Invoke the cloneGroceries function.
cloneGroceries()
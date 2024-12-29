// Declare a global variable named allBoldItems.
var allBoldItems = []
var paragraph = document.querySelector('p')

// Create a function called getBoldItems() that takes no parameter. 
//This function should collect all the bold items inside the paragraph 
//and assign them to the allBoldItems variable.
function getBoldItems(){
    let allItems = paragraph.children
    for (let item of allItems){
        if (item.style.fontWeight = 'bold'){
            allBoldItems.push(item)
        }
    }

}
getBoldItems()
console.log(allBoldItems)


// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
    for (let b of allBoldItems){
        b.style.color = "blue"
    }
}

// Create a function called returnItemsToDefault() that changes the color of all the bold 
// text back to black.
function returnItemsToDefault(){
    for (let b of allBoldItems){
        b.style.color = "black"
    }
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
// and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out 
// of the paragraph).
paragraph.addEventListener('mouseover', highlight)
paragraph.addEventListener('mouseout', returnItemsToDefault)
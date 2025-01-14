const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]
// 1. Using an array method and ternary operator, check if at least one element 
// in the menu array is a dessert.
function isContainDesert(menuArr){
    return menuArr.some(item => item['type'] === "dessert")
}
console.log('expect true ', isContainDesert(menu)) //true
//2. Using an array method, check if all the elements in the array are starters.
function isAllStarters(menuArr){
    return menu.every(item => item['type'] === "starter")
}
console.log('expect false ', isAllStarters(menu)) //false

//3.Using an array method, check if there is at least one element 
// in the array that is a main course. If not, add a main course of your choice to the array.
function provideMainCourse(menuArr){
    if (!menuArr.some(item => item["type"] === "main course")){
        menuArr.push({"type" : "main course", "name" : "Beef burger"})
    }
    return menuArr
}
console.log(provideMainCourse(menu))

// Using an array method, add a key “vegetarian” (a boolean) to the menu array. 
// The value of the key should be true if the name of the course contains at 
// least one element from the vegetarian array.
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
function addIsVegetarian(menuArr){
    for (let item of menuArr){
        let isVeg = false
        for (let word of item['name'].split(" ")){
            if (vegetarian.indexOf(word.toLowerCase()) !== -1){
                console.log(word, vegetarian.indexOf(word.toLowerCase()))
                isVeg = true
            }
        }
        
        item['vegetarian'] = isVeg
    }

    return menuArr
}
console.log(addIsVegetarian(menu))

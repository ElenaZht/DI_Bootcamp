// --------------------------------Part 1--------------------------------
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
function makeJuice(size){
    let body = document.querySelector('body')
    let messege = document.createElement('div')
    body.appendChild(messege)

    function addIngredients(ing1, ing2, ing3){
        messege.textContent = `The client wants a ${size} juice, containing ${ing1}, ${ing2} and ${ing3}`
    }

    addIngredients('licci', 'mango', 'apple')
}

makeJuice('large')

// --------------------------------Part 2--------------------------------
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
function makeJuice2(size){
    let body = document.querySelector('body')
    let messege = document.createElement('div')
    body.appendChild(messege)
    let ingredients = []

    function addIngredients(ing1, ing2, ing3){
        ingredients.push(ing1, ing2, ing3)
    }

    function displayJuice(){
        let result = 'The client wants a ' + size + ' juice, containing '
        for (let i=0; i < ingredients.length; i++){
            result += ingredients[i]
            if(i < ingredients.length - 1){
                result += ", "
            }
        }

        messege.textContent = result
    }

    addIngredients('licci', 'mango', 'apple')
    addIngredients('cherry', 'lemon', 'kiwi')
    displayJuice()
}
makeJuice2('medium')

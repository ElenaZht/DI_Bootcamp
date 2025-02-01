// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array 
// as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() 
// function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.
function createForm(){
    const root  = document.getElementById('root')

    const form = document.createElement('form')
    form.id = 'addItemForm'

    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'enter an item'
    input.id = 'itemInput'
    form.appendChild(input)

    const addBtn = document.createElement('button')
    addBtn.textContent = 'Add'
    addBtn.id = 'addItemBtn'
    form.appendChild(addBtn)

    const clearAllBtn = document.createElement('button')
    clearAllBtn.textContent = 'Clear All'
    clearAllBtn.id = 'clearAllBtn'
    form.appendChild(clearAllBtn)

    const output = document.createElement('div')
    output.id = 'output'
    form.appendChild(output)

    root.appendChild(form)

}

function showItem(item){
    if (item){
        const li = document.createElement('li')
        li.textContent = item
        document.getElementById('output').appendChild(li)
    }
}

function addItem(item, shoppingList){
    if (item) shoppingList.push(item)
    console.log(shoppingList)
    showItem(item)
}

function clearAll(shoppingList){
    shoppingList = []
    const output = document.getElementById('output')
    output.innerHTML = ''
}

function main(){
    let shoppingList=[]

    createForm()
    const addBtn = document.getElementById('addItemBtn')
    addBtn.addEventListener('click', (e) => {
        e.preventDefault()

        let inputVal = document.getElementById('itemInput').value
        
        if (inputVal){
            addItem(inputVal, shoppingList)
        }

        document.getElementById('itemInput').value = ''
        
    })

    const clearAllBtn = document.getElementById('clearAllBtn')
    clearAllBtn.addEventListener('click', (e) => {
        e.preventDefault()
        clearAll(shoppingList)
    })

}
main()
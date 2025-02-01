// Add a click event listener to the <input type="button">. When clicked on, 
// it should call a function named : removecolor() that removes the selected 
// color from the dropdown list.

function removecolor(color){
    const select= document.querySelector('select')
    if (select && select.selectedOptions.length > 0){ 
        select.selectedOptions[0].remove()
    }
    // issue: by default selectedOptions includes first option element even if no option selected
    // so this code will removes the first option if no selected one
}

function main(){
    const removeBtn = document.querySelector('input[value="Select and Remove"]')
    removeBtn.addEventListener('click', (e) => {
        e.preventDefault()
        removecolor()
    })
}
main()
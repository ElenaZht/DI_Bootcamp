// ------------Color palete------------
let palete = document.getElementsByClassName('palete')[0]
let colors = [
    'red', 'orangered', 'orange', 'yellow', 'yellowgreen', 
    'lightgreen', 'green', 'turquoise', 'cyan', 'lightskyblue', 
    'dodgerblue', 'blue', 'darkblue', 'indigo', 'darkmagenta', 
    'violet', 'lightpink', 'lightgray', 'gray', 'black', 'white'
]

for (let color of colors){
    let colorCell = document.createElement('div')
    colorCell.classList.add('color')
    colorCell.style.backgroundColor = color
    palete.appendChild(colorCell)
}
let colorButtons = document.getElementsByClassName('color')
let currentColor = ''
function setColor(event){
    currentColor = event.target.style.backgroundColor
}
for (let cb of colorButtons){
    cb.addEventListener('click', setColor)
}

// ------------Drawing board------------
let board = document.getElementsByClassName('board')[0]
board.addEventListener('mousedown', (e) => {
    e.preventDefault()
    board.style.cursor = 'crosshair';
});

document.addEventListener('mouseup', () => {
    board.style.cursor = 'default';
});

for (let i = 0; i <= 300; i++){
    let cell = document.createElement('div')
    cell.classList.add('cell')
    board.appendChild(cell)
}
const cells = Array.from(document.getElementsByClassName('cell'))
let isDrawing = false

cells.forEach((cell) => {
    //click or/and moving - start drawing
    cell.addEventListener('mousedown', () => {
        isDrawing = true
        cell.style.backgroundColor = currentColor
    })

    //continue drawing on move
    cell.addEventListener('mousemove', () => {
        if (isDrawing && currentColor){
            cell.style.backgroundColor = currentColor
        }
    })

});
//release mouse - stop drawing
document.addEventListener('mouseup', () => {
    isDrawing = false 
})


function clear(){
    Array.from(cells).forEach((cell) => {
        if (cell.style.backgroundColor != 'white'){
            cell.style.backgroundColor = 'white'
        }
    })
}
const clearButton = document.getElementById('clearButton')
clearButton.addEventListener('click', clear)
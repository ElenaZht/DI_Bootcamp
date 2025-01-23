//write some Javascript code to color all diagonal 
// table cells in red.

let table = document.body.firstElementChild;
// let children = Array.from(table.children)
// console.log(table.children)
const rows = Array.from(document.getElementsByTagName('tr'))
let idx1 = 0
let idx2 = 4
console.log(rows)

for (let row of rows){
    const cells = Array.from(row.children)
    console.log(cells[idx1], cells[idx2])
    cells[idx1].style.backgroundColor = 'red'
    cells[idx2].style.backgroundColor = 'red'
    idx1++
    idx2--
}
    

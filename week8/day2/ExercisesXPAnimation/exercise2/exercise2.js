// use setInterval to move the <div id="animate"> to the right side of the <div id="container">, 
// when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches 
// the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
let div = document.getElementById('animate')
let parentDiv = document.getElementById('container')
let button = document.querySelector('button')
let bias = 0
let rigthEdge = parentDiv.clientWidth - div.clientWidth


function myMove(){
    let oneMilisecondInterval = setInterval(() => {
        
        bias++
        div.style.left = `${bias}px`

        if (bias >= rigthEdge)
            clearInterval(oneMilisecondInterval)

    }, 1)
    
}


button.addEventListener('click', myMove)




// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function hello(){
    alert('Hello World')
}
// setTimeout(hello, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function addPartagraph(){
    let parentDiv = document.getElementById('container')
    let newParagraph = document.createElement('p')
    newParagraph.textContent = 'Hello World'
    parentDiv.appendChild(newParagraph)
    counter++
}
// setTimeout(addPartagraph, 2000)

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
let counter = 0
let newInterval = setInterval(() => {
    addPartagraph()
    if (counter === 5){
        clearInterval(newInterval)
    }
}, 2000);

let button = document.getElementById('clear')
button.addEventListener('click', () => clearInterval(newInterval))

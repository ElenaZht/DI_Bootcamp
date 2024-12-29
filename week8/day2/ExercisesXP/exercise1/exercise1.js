// Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.querySelector('h1')
console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.
let article = document.querySelector('article')
const pChildren = article.querySelectorAll(":scope > p");
pChildren[pChildren.length - 1].remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector('h2')
h2.addEventListener('click', () => {h2.style.backgroundColor = h2.style.backgroundColor === "red" ? "" : "red"})// on and off reb background

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.querySelector('h3')
h3.addEventListener('click', () => {h3.style.display = 'none'})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.createElement('button')
button.textContent = 'make bold'
button.addEventListener('click', () => {pChildren.forEach((p)=>p.style.fontWeight = 'bold')})
article.appendChild(button)

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
const randomInt = Math.floor(Math.random() * 101);
h1.addEventListener('mouseover', () => {h1.style.fontSize = `${randomInt}px`})

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
h2.addEventListener('mouseover', () => {h2.style.opacity = ".5"})
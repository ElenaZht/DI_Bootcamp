let allBooks = [
    {'title': 'The dogs heart', 'author': 'Michael Bulgakov', 'image': 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781847495686.jpg', 'alreadyRead': false},
    {'title': 'Morphine', 'author': 'Michael Bulgakov', 'image': 'https://upload.wikimedia.org/wikipedia/en/4/47/Morphine_%28film_poster%29.jpg', 'alreadyRead': true}
]

// add two divs to section
let section = document.querySelector('section')
let parent_div = document.createElement('div')
section.appendChild(parent_div)

// display the books
// HarryPotter written by JKRolling.
//width of the image has to be set to 100px.
//If the book is already read. Set the color of the book’s details to red.
let list = document.createElement('ul')
parent_div.appendChild(list)

let li1 = document.createElement('li')
let li2 = document.createElement('li')
li1.style.display = 'flex'
li1.style.flexDirection = 'column'
li2.style.display = 'flex'
li2.style.flexDirection = 'column'

list.appendChild(li1)
list.appendChild(li2)

let book1 = allBooks[0]
let book2 = allBooks[1]
li1.textContent = `${book1['title']} written by ${book1['author']}`
li2.textContent = `${book2['title']} written by ${book2['author']}`

let image1 = document.createElement('img')
image1.setAttribute('src', book1['image'])
image1.style.width = "100px"
li1.appendChild(image1)
if (book1['alreadyRead']){
    li1.style.color = "red"
}

let image2 = document.createElement('img')
image2.setAttribute('src', book2['image'])
image2.style.width = "100px"
li2.appendChild(image2)
if (book2['alreadyRead']){
    li2.style.color = "red"
}



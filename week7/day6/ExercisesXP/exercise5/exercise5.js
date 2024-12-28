// Using Javascript:
// Retrieve the div and console.log it
console.log(document.querySelector("div"))

// Change the name “Pete” to “Richard”.
let alllis = document.querySelectorAll("li")
for (let li of alllis){
    if (li.textContent === "Pete"){
        li.textContent = "Richard"
    }
}

// Delete the second <li> of the second <ul>.
let lists = document.querySelectorAll("ul")
let element = lists[1]['children'][1].remove()

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for (let list of lists){
    list.children[0].textContent = "Elena"
}

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
for (let list of lists){
    list.classList.add("student_list")
}

// Add the classes university and attendance to the first <ul>.
lists[0].classList.add("university")
lists[0].classList.add("attendance")

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
let divs = document.querySelectorAll("div")
for(let div of divs){
    div.style.backgroundColor = "lightblue"
    div.style.padding = "5%"
}

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
let liElements = lists[lists.length - 1].querySelectorAll("li");
console.log(liElements)
for (let li of liElements){
    if (li.textContent === "Dan"){
        
        li.style.display = "none"
    }
}

// Add a border to the <li> that contains the text node “Richard”. 
// (the second <li> of the <ul>)
for (let li of alllis) {
    if (li.textContent === "Richard"){
        li.style.border = "solid"
    }
}

// Change the font size of the whole body.
let body = document.querySelector("body")
body.style.backgroundColor = "beige"

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
// div with blue background has no children
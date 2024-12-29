// Retrieve the form and console.log it.
let form = document.querySelector('form')
console.log(form)

// Retrieve the inputs by their id and console.log them.
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
console.log(firstName, lastName)

// Retrieve the inputs by their name attribute and console.log them.
let firstname = document.getElementsByName('firstname')
let lastname = document.getElementsByName('lastname')
console.log(firstname, lastname)


// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
function SubmitForm(){
    event.preventDefault()
    let name = document.getElementsByName('firstname')[0]
    let nameVal = name.value
    let familyname = document.getElementsByName('lastname')[0]
    let familynameVal = familyname.value
    console.log('submit data: ', nameVal, familynameVal)
    name.required = true
    familyname.required = true
    let dataList = document.createElement('ul')
    dataList.textContent = 'user input data:'
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    li1.textContent = nameVal
    li2.textContent = familynameVal
    dataList.appendChild(li1)
    dataList.appendChild(li2)
    document.querySelector('body').appendChild(dataList)

}
form.addEventListener('submit', SubmitForm)


{/* <ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul> */}
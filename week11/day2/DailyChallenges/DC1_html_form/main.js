function displayUserData(data){
    const users = document.getElementsByClassName('users')[0]
    let newUser = document.createElement('p')
    newUser.textContent = JSON.stringify(data) //{"firstname":"Elena","lastname":"Zhytomirskaya"}`
    users.appendChild(newUser)
}

function submitHandler(event){
    event.preventDefault()
    const firstnameInput = document.getElementsByName('firstName')[0]
    const lastnameInput = document.getElementsByName('lastName')[0]
    displayUserData({'firstname': firstnameInput.value, 'lastname' : lastnameInput.value})
}

function main(){
    const submitButton = document.querySelector('button')
    submitButton.addEventListener('click', submitHandler)
}

main()
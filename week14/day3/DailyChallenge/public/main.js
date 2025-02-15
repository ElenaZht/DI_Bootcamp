function submitLogin(e){
    e.preventDefault()
    const username = document.getElementsByName('username')[0].value
    const password = document.getElementsByName('password')[0].value
    if (!username.length){
        displayMessage('username is required', 'fail')
        return
    }
    if (!password.length){
        displayMessage('password is required', 'fail')
        return
    }
    if (password.length < 6){
        displayMessage('password min length is 6', 'fail')
        return
    }
    try {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })
        .then(res => {
            if (res.status === 200){

                res.json()
                .then(body => 
                    
                    displayMessage(body.message, 'success')
                )
                return
                

            } else {
                res.json()
                .then(body => 
                    
                    displayMessage(body.message, 'fail')
                )
                return
            }
        })

    } catch (error) {
        displayMessage(error.message, 'fail')
    }

}

function submitRegister(e){
    e.preventDefault()
    const username = document.getElementsByName('username')[0].value
    const password = document.getElementsByName('password')[0].value
    const firstname = document.getElementsByName('firstname')[0].value
    const lastname = document.getElementsByName('lastname')[0].value
    const email = document.getElementsByName('email')[0].value

    if (!username.length){
        displayMessage('username is required', 'fail')
        return
    }
    if (!password.length){
        displayMessage('password is required', 'fail')
        return
    }
    if (password.length < 6){
        displayMessage('password min length is 6', 'fail')
        return
    }
    try {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username, 
                password, 
                firstname,
                lastname,
                email
            })
        })
        .then(res => {
            if (res.status === 200){

                res.json()
                .then(body => 
                    
                    displayMessage(body.message, 'success')
                )
                return
                

            } else {
                res.json()
                .then(body => 
                    
                    displayMessage(body.message, 'fail')
                )
                return
            }
        })

    } catch (error) {
        displayMessage(error.message, 'fail') 
    }
}

function displayMessage(msg, flag){
    const messageDiv = document.getElementsByClassName('message')[0]
    messageDiv.textContent = msg
    if (flag === 'success'){
        messageDiv.className = 'message success'
    } else {
        messageDiv.className = 'message fail'
    }
}

function checkInputs() {
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    if (loginBtn){
        if (username.length > 0 && password.length > 0) {
            loginBtn.disabled = false;
        } else {
            loginBtn.disabled = true;
        }
        return
    }
    if (registerBtn){
        if (username.length > 0 && password.length > 0) {
            registerBtn.disabled = false;
        } else {
            registerBtn.disabled = true;
        }
        return
    }
    
}

function main(){
    const loginBtn = document.getElementById('loginBtn')
    if (loginBtn){
        loginBtn.addEventListener("click", submitLogin)
        loginBtn.disabled = true
    }

    const registerBtn = document.getElementById('registerBtn')
    if (registerBtn){
        registerBtn.addEventListener("click", submitRegister)
        registerBtn.disabled = true
    }

    document.getElementsByName('username')[0].addEventListener('input', checkInputs);
    document.getElementsByName('password')[0].addEventListener('input', checkInputs);
}

main()
function validateEmail(email){
    //The address should contain some valid characters, and the @ sign, 
    // more characters then a . (period) and some more characters

    // validation
    let result = []

    let shtrudelIdx = email.indexOf('@')
    let dotIdx = email.indexOf('.')

    if (shtrudelIdx == -1){
        result.push('has no @ sign')
    }
    if (dotIdx == -1){
        result.push('has no .')
    }

    if (shtrudelIdx > dotIdx){
        result.push('@ should be before .')
    }

    const splitedByDomain = email.split('@')
    if (splitedByDomain.length < 1){
        result.push('domain is missin')
    }

    // show results of validation
    const output = document.getElementById('output')
    output.innerHTML = ''
    if (result.length){
        for (let res of result){
            const li = document.createElement('li')
            li.textContent = res
            li.style.color = 'red'
    
            output.appendChild(li)
            document.getElementById('emailInput').style.border = 'solid red'
        }
    } else {
        document.getElementById('emailInput').style.border = 'solid green'
    }   
}

function validateEmailRegex(email){
    pattern = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    const res =  pattern.test(email)
        // show results of validation
        const output = document.getElementById('output')
        output.innerHTML = ''
        if (!res){
            const li = document.createElement('li')
            li.textContent = 'email not valid: dissmissing pattern'
            li.style.color = 'red'
            output.appendChild(li)
            document.getElementById('emailInput').style.border = 'solid red'
        
        } else {
            document.getElementById('emailInput').style.border = 'solid green'
        }
        
    return res
}

function main(){
    const input = document.getElementById('emailInput')
    input.addEventListener('input', (e) => {
        document.getElementById('output').innerHTML = ''
        document.getElementById('emailInput').style.border = 'solid .5px'
    })

    const validateBtn = document.getElementById('validateBtn')
    validateBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (input.value){
            // validateEmail(input.value)
            validateEmailRegex(input.value)
        } else {
            alert('enter your email')
        }
    })
}
main()
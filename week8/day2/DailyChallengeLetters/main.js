// 1. Create an input type text that takes/shows only letters. 
// (ie. numbers and special characters won’t be accepted)
const input = document.getElementById('input')
input.addEventListener('input', (e) => {
    console.log(e.key)
    
    //clean input from forbiten char.charCodeAt()
    let inputText = input.value
    let result = ''
    for (let i of inputText){
        let asciiVal = i.charCodeAt()
        if (asciiVal >=65 && asciiVal <= 90 || asciiVal >=97 && asciiVal <= 122){
            result += i
        }
    }
    //show result string
    const output = document.getElementById('output')
    output.textContent = result
})



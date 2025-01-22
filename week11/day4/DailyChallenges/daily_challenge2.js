const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs(){
//converts the morse json string provided above 
// to a morse javascript object.
//return promise
//if object is empty, throw an error (use reject)
return new Promise((res, rej) => {
    const morseJSObject = JSON.parse(morse)
    if (Object.keys(morseJSObject).length === 0){
    rej('object is empty')
    } else {
        //else return the morse javascript object (use resolve)
    res(morseJSObject)
    }
})

}

function toMorse(morseJS){
    // This function asks the user for a word or a sentence.
    // if the user entered a character that doesn’t exist in 
    // the new morse javascript object, throw an error. (use 
    // reject)
    // else return an array with the morse translation of 
    // the user’s word.
    const sentence = prompt('enter any sentence')
    console.log('sentence ', sentence)
    return new Promise((res, rej) => {
        if (sentence.length){
        let result = []
        for (let char of sentence.split('')){
            if (morseJS[char]) {
                result.push(morseJS[char])
            } else {
                rej(new Error(`symbol ${char} is not in morse alphabet`)
                )
            }
        }
        console.log('trans result ', result)
        res(result)
    } 
    })

}

// The third function called joinWords(morseTranslation), 
// takes one argument: the morse translation array
// this function joins the morse translation by using 
// line break and display it on the page (ie. On the DOM)
function displayTranslation(translation){
    const body = document.querySelector('body')
    const div = document.createElement('div')
    div.innerHTML = translation.replace(/\n/g, '<br>')
    body.appendChild(div)
}

function joinWords(morseTranslation){
    console.log('joinWords gets ', morseTranslation)
    const joinedTranslation = morseTranslation.join('\n')
    console.log('and makes ', joinedTranslation)
    displayTranslation(joinedTranslation)
}

toJs()
.then((jsMorse) => toMorse(jsMorse))
.then(resultArr => joinWords(resultArr))
.catch((error) => console.error(error.message))
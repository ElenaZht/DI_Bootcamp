// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.
function caseFlipper(str){
    let result = ''
    for (let char of str){
        if (/^[a-zA-Z]$/.test(char)){
            if (char.toUpperCase() === char){
                result += char.toLowerCase()
            } else {
                result += char.toUpperCase()
            }
        } else {
            result += char
        }
    }

    return result
}

console.log('flipped The Quick Brown Fox', 'to ', caseFlipper('The Quick Brown Fox'))
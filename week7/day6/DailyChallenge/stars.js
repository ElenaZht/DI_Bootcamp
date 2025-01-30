// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
//The number of stars that wraps the sentence, must depend on the length of the longest word.

function getInput(){
    const input = prompt('enter a few words separated by coma').trim()

    //input validation
    if (!input.length){
        alert('empty string')
        return
    }

    const words =  input.split(',')
    return words
}

function showResult(words){
    const width = words.reduce((max, el) => el.length > max ? max = el.length : max, 0) + 4
    const len = words.length + 2

    console.log('*'.repeat(width))
    for (let w of words){
        const spaces = width - 4 - w.length
        console.log(`* ${w}${' '.repeat(spaces)} *`) 
    }
    console.log('*'.repeat(width))


}

function main(){
    const words = getInput()
    showResult(words)
    // *************
    // * my        *
    // * name      *
    // * is        *
    // * crocodail *
    // *************
}
main()

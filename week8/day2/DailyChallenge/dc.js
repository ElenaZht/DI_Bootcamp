// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
let currentStory  = []
let specialWords = {
    'noun': '', 
    'adjective': '',
    'person': '',
    'verb': '',
    'place': ''
}
const patterns = [
    'Once upon a time, a adjective noun decided to verb to place. On the way, it encountered a adjective noun who wanted to verb with it. Together, they verb to the place and discovered a adjective noun.'.match(/\w+|[^\w\s]/g),
    'In a place, a adjective animal was verb when it met a adjective animal. They decided to verb together and explore the place, looking for a noun. After a long day, they were emotion and verb back home.'.match(/\w+|[^\w\s]/g),
    'On a adjective night, a noun was seen verb near the place. The adjective detective, person, was called to investigate. They found a adjective noun and began to verb for clues. After hours of searching, they uncovered a adjective secret.'.match(/\w+|[^\w\s]/g)
]
let patternIdx = 0

function nextIndex(){
    patternIdx = (patternIdx + 1) % 3
    return patternIdx
}

function applyPattern(pattern){
    let newStory = []
    for (let word of pattern){
        if (word in specialWords){
            newStory.push(specialWords[word])
        } else {
            newStory.push(word)
        }
    }
    return newStory
}

function getInputData(event){
    event.preventDefault()
    specialWords['noun'] = document.getElementById('noun').value
    specialWords['adjective'] = document.getElementById('adjective').value
    specialWords['person'] = document.getElementById('person').value
    specialWords['verb'] = document.getElementById('verb').value
    specialWords['place'] = document.getElementById('place').value
}

function onSubmit(event){
    getInputData(event) //fill dict with input values
    let story = applyPattern(patterns[patternIdx]) // generate story on base of current pattern
    let newParagraph = document.createElement('p')
    newParagraph.textContent = story.join(' ')
    document.getElementById('story').appendChild(newParagraph) // add story paragraph to html
}

let submitButton = document.getElementById('lib-button')
submitButton.addEventListener('click', onSubmit)

function onShuffle(event){
    event.preventDefault()
    let story = applyPattern(patterns[nextIndex()])
    let newParagraph = document.createElement('p')
    newParagraph.textContent = story.join(' ')
    document.getElementById('story').appendChild(newParagraph)
}

let shuffleButton = document.createElement('button') // add shuffle button
shuffleButton.textContent = 'shuffle'
shuffleButton.addEventListener('click', onShuffle)
document.getElementById('libform').appendChild(shuffleButton)

function success(game){
    const h1 = document.querySelector('h1')
    h1.textContent = 'You are right! Bravo!'
    game.score += 1
    updateScore(game.score)
}

function lose(game){
    const h1 = document.querySelector('h1')
    h1.textContent = 'Oh no! You lose..'
    if (game.score > 0){
        game.score -= 1
        updateScore(game.score)

    }
}

function displayAnswer(rightAnswer){
    const h2 = document.querySelector('h2')
    h2.textContent = `It is ${rightAnswer}!`
    const options_container = document.getElementsByClassName('options_container')[0]
    options_container.innerHTML = ''
}

function handleInput(realName, game){
    document.getElementById('guessButn').style.display = 'none'

    const guessValue = document.querySelector('input[name="option"]:checked').value
    if (guessValue == realName){
        success(game)
    } else {
        lose(game)
    }
    displayAnswer(realName)
}

function updateScore(score){
    const scoreSpan = document.getElementsByClassName('score')[0]
    scoreSpan.textContent = `your score: ${score}`
}

function displayChallenge(challenge){
    const h1 = document.querySelector('h1')
    h1.textContent = 'Guess Emoji Name!'
    const h2 = document.querySelector('h2')
    h2.textContent = 'Make your guess and press the button! Good luck!'

    const emoji = challenge[0].emoji
    const options = [...challenge[1], challenge[0].name]

    const emoji_container = document.getElementsByClassName('emoji_container')[0]
    emoji_container.textContent = emoji
    const options_container = document.getElementsByClassName('options_container')[0]
    options_container.innerHTML = ''
    for (let option of options){
        const inputOption = document.createElement('input')
        const label = document.createElement('label')
        label.for = inputOption
        label.textContent = option
        
        inputOption.type = 'radio'
        inputOption.value = option
        inputOption.name = 'option'

        options_container.appendChild(inputOption)
        options_container.appendChild(label)
    }
    document.getElementById('guessButn').style.display = 'flex'
}

async function fetchChallenge(){
    try {
        const response = await fetch('http://localhost:5000/challenge')
        const responseJson = await response.json()
        return responseJson

    } catch (error) {
        console.error(error)
    }
}

async function main(){
    let game = {'score': 0}
    let currentEmoji = {}

    const newChallenge = await fetchChallenge()
    if(newChallenge && newChallenge.length > 1){
        displayChallenge(newChallenge)
        currentEmoji = newChallenge[0]
    }

    const guessButn = document.getElementById('guessButn')
    guessButn.addEventListener('click', (e) => {
        e.preventDefault()
        handleInput(currentEmoji.name, game)
    })

    const nextBtn = document.getElementById('nextChallenge')
    nextBtn.addEventListener('click', async(e) => {
        e.preventDefault()
        const newChallenge = await fetchChallenge()
        currentEmoji = newChallenge[0]
        if(newChallenge && newChallenge.length > 1){
            displayChallenge(newChallenge)
        }
    })

}
main()
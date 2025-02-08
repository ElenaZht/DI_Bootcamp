function renderQuestion(question){
    const questionContainer = document.getElementsByClassName('questionContainer')[0]
    questionContainer.textContent = question
    document.getElementById('answer').focus()

}

function renderScore(score){
    document.getElementById('submitBtn').style.display = 'none'
    document.getElementsByClassName('questionContainer')[0].textContent = `Score: ${score}!`
}

function onQuizOver(){
    document.getElementById('nextBtn').style.display = 'none'
    document.getElementById('submitBtn').style.display = 'flex'
    document.getElementById('answer').style.display = 'none'
    document.getElementsByClassName('questionContainer')[0].textContent = 'Quiz is over!'

}

async function getScore(){
    const url = 'http://localhost:3000/quiz/score'
    try {
        const response = await fetch(url)
        const score = await response.json()
        if (score){
            renderScore(score.score)
        }

    } catch (error) {
        console.error(error)
    }
}

async function startQuiz() {
    const url = 'http://localhost:3000/quiz'
    try {
        fetch(url)
            .then(response => response.json())
            .then(response => renderQuestion(response))
            .catch(err => console.error(err))
            document.getElementById('nextBtn').style.display = 'flex'

    } catch (error) {
        console.error(error)
    }
}

async function submitAnswer() {
    const userAnswer = document.getElementById('answer').value;
    document.getElementById('answer').value = ''
    if (userAnswer) {
        const url = 'http://localhost:3000/quiz';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userAnswer })
            });

            const data = await response.json();
            if (data){
                if (data == 'quiz is over'){
                    onQuizOver()
                    return
                }
                renderQuestion(data)
            }

        } catch (error) {
            console.error('Error submitting answer:', error);
        }
    } else {
        console.log('No answer provided');
    }
}


function main(){

    const nextBtn = document.getElementById('nextBtn')
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault()
        submitAnswer()
    })

    const submitBtn = document.getElementById('submitBtn')
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        getScore()
    })
    startQuiz()
}
main()
const triviaQuestions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "Blue whale",
    },
];

let score = 0
let currQuestionIndex = 0

export const getFirstQuestion = (req, res) => {
if (triviaQuestions){
    res.json(triviaQuestions[currQuestionIndex].question)
} else {
    res.sendStatus(404)
}
}

export const submitAnswer = (req, res) => {
const currQuestion = triviaQuestions[currQuestionIndex]
const rightAnswer = currQuestion.answer
const { userAnswer } = req.body

if (userAnswer){
    if (userAnswer.toLowerCase() === rightAnswer.toLowerCase()){
        score++
    }

        currQuestionIndex++
        if (triviaQuestions[currQuestionIndex]){
            res.status(200).json(triviaQuestions[currQuestionIndex].question)

        } else {
            res.status(200).json("quiz is over")
        }

    } else {
        res.sendStatus(400)
    }
}

export const getScore = (req, res) => {
    res.json({score})
}


import express from 'express'
import { getFirstQuestion, submitAnswer, getScore } from '../controllers/controller.js';

const router = express.Router()

// GET /quiz: Start the quiz and display the first question.
router.get('/', getFirstQuestion)
// POST /quiz: Submit an answer to the current question and move to the next question.
router.post('/', submitAnswer)
// GET /quiz/score: Display the user’s final score at the end of the quiz.
router.get('/score', getScore)


export default router;
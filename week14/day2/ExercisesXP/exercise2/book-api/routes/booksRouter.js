import express from 'express'
import { getAllBooks, getBookById, addBook } from '../controllers/booksController.js'

const router = express.Router()

// GET /api/books
router.get('/', getAllBooks)
//POST /api/books
router.post('/', addBook)
//GET /api/books/:bookId
router.get('/:id', getBookById)

export default router
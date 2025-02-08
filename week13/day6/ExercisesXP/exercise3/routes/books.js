import express from 'express'
import { getAllBooks, addBook, updateBook, deleteBook } from '../controllers/controller.js';

const router = express.Router();

//Express matches routes in order!
//"Specific routes before dynamic routes" 
//requests will match the first route that fits the pattern

router.get('/books', getAllBooks);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);


export default router;
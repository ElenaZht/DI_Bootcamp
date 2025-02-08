import express from 'express'
import { getAllTodos, addTodo, updateTodo, deleteTodo } from '../controllers/controller.js';

const router = express.Router();

//Express matches routes in order!
//"Specific routes before dynamic routes" 
//requests will match the first route that fits the pattern

router.get('/todos', getAllTodos);
router.post('/todos', addTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);


export default router;
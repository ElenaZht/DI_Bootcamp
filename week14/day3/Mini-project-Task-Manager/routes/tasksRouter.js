import express from 'express'
import { gellTasks, getTaskByID, addTask, updateTask, deleteTask } from '../controllers/tasksController.js'

const router = express.Router()

// GET /tasks: Retrieve a list of all tasks from a JSON file.
router.get('/', gellTasks)

// POST /tasks: Create a new task and store it in the JSON file.
router.post('/', addTask)
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
router.get('/:id', getTaskByID)

// PUT /tasks/:id: Update a task by ID in the JSON file.
router.put('/:id', updateTask)
// DELETE /tasks/:id: Delete a task by ID from the JSON file.
router.delete('/:id', deleteTask)

export default router
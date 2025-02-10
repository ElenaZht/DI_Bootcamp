import express from 'express'
import { getAllUsers, getUserById, updateUser, addUser, loginUser } from '../controllers/usersController.js'

const router = express.Router()

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.put('/users/:id', updateUser)
router.post('/register', addUser)
router.post('/login', loginUser)

export default router
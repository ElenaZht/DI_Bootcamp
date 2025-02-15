import express from 'express'
import { 
    getAllUsers,
    getUserByID,
    registerUser,
    updateUser,
    loginUser
} from '../controllers/userController.js'

const router = express.Router()

// GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
router.get('/users', getAllUsers)
// GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
router.get('/users/:id', getUserByID)
// PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required).
router.put('/users/:id', updateUser)
// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
router.post('/register', registerUser)
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
router.post('/login', loginUser)


export default router

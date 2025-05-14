import { Router } from 'express';
import { registerUser, loginUser, refreshToken, logoutUser, getUserInfo, getAllUsers } from '../controllers/userController';
import { validateRegister, validateLogin } from '../helpers/inputValidations';
import { authenticate } from '../helpers/auth';


const router = Router()
router.get('/', authenticate,  getAllUsers)
router.get('/refresh-token', refreshToken);
router.get('/:id', authenticate, getUserInfo);

router.post('/register', validateRegister, registerUser)
router.post('/login', validateLogin, loginUser)

router.post('/logout', logoutUser);




export default router
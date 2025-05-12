import { Router } from 'express';
import { registerUser, loginUser, refreshToken, logoutUser } from '../controllers/userController';
import { validateRegister, validateLogin } from '../helpers/inputValidations';


const router = Router()

router.post('/register', validateRegister, registerUser)
router.post('/login', validateLogin, loginUser)
router.get('/refresh-token', refreshToken);
router.post('/logout', logoutUser);


export default router
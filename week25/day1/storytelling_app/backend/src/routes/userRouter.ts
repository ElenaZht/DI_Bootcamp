import { Router } from 'express';
import { registerUser, loginUser, refreshToken } from '../controllers/userController';
// import { validateRegister, validateLogin } from '../helpers/inputValidations';


const router = Router()

//public routes
// router.post('/register', validateRegister, registerUser)
router.post('/register', registerUser)
// router.post('/login', validateLogin, loginUser)
router.post('/login', loginUser)

router.get('/refresh-token', refreshToken);

// Protected routes (require authentication)
// router.get('/protected-route', authenticate, (req, res) => {
//     res.status(200).json({ message: 'You have accessed a protected route!', user: req.user });
// });

export default router
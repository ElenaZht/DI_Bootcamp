const {Router} = require('express')
const userController = require('../controllers/userController.js')
const { validateRegister,validateLogin } = require('../helpers/registerInputValidation.js');
const authenticate = require('../helpers/auth.js'); 

const router = Router()

//pblic routes
router.post('/register', validateRegister, userController.registerUser)
router.post('/login', validateLogin, userController.loginUser)
router.get('/refresh-token', userController.refreshToken);

// Protected routes (require authentication)
// router.get('/protected-route', authenticate, (req, res) => {
//     res.status(200).json({ message: 'You have accessed a protected route!', user: req.user });
// });

module.exports = router
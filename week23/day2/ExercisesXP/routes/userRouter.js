const express = require('express')
const {signUpUser, logInUser, updateToken, logOutUser, editUser} = require('../controllers/userController.js')
const {verifyToken} = require('../middleware/tokenAuth.js')
const {authLimiter} = require('../middleware/rateLimit.js')

const router = express.Router()
console.log('userRouter loaded')


router.post('/register', signUpUser)
router.post('/login', authLimiter, logInUser)
router.post('/refresh', authLimiter, verifyToken, updateToken)
router.post('/logout', logOutUser)
router.post('/edituser', verifyToken, editUser)


module.exports = router;
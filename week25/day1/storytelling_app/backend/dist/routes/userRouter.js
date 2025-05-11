"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
// import { validateRegister, validateLogin } from '../helpers/inputValidations';
const router = (0, express_1.Router)();
//public routes
// router.post('/register', validateRegister, registerUser)
router.post('/register', userController_1.registerUser);
// router.post('/login', validateLogin, loginUser)
router.post('/login', userController_1.loginUser);
router.get('/refresh-token', userController_1.refreshToken);
// Protected routes (require authentication)
// router.get('/protected-route', authenticate, (req, res) => {
//     res.status(200).json({ message: 'You have accessed a protected route!', user: req.user });
// });
exports.default = router;

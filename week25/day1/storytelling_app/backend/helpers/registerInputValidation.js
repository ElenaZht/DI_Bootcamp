const { body, validationResult } = require('express-validator');

// Validation rules for registration
const validateRegister = [
  body('username')
    .trim()
    .escape() // Escapes special characters to prevent SQL injection
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),

  body('email')
    .normalizeEmail() // Normalizes email to a standard format
    .isEmail().withMessage('Invalid email'),

  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

  // Middleware to check for validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // All good, pass control to the controller
  }
];

// Validation rules for login
const validateLogin = [
  body('email')
    .normalizeEmail()
    .isEmail().withMessage('Invalid email'),

  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

  // Middleware to check for validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // All good, pass control to the controller
  }
];

module.exports = {
  validateRegister,
  validateLogin
};
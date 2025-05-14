"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCommentContent = exports.validateUsername = exports.validateText = exports.validateLogin = exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
// Common validation rules
const commonValidations = {
    username: () => (0, express_validator_1.body)('username')
        .trim()
        .escape()
        .isLength({ min: 3, max: 30 })
        .withMessage('Username must be between 3 and 30 characters')
        .matches(/^[a-zA-Z][a-zA-Z0-9_-]*$/)
        .withMessage('Username must start with a letter and can only contain letters, numbers, underscores and hyphens'),
    email: () => (0, express_validator_1.body)('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid email format'),
    password: () => (0, express_validator_1.body)('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
    title: () => (0, express_validator_1.body)('title')
        .trim()
        .escape()
        .isLength({ min: 3, max: 100 })
        .withMessage('Title must be between 3 and 100 characters'),
    content: () => (0, express_validator_1.body)('content')
        .trim()
        .escape()
        .isLength({ min: 10, max: 1000 })
        .withMessage('Content must be between 10 and 1000 characters')
};
// Common validation middleware
const handleValidationErrors = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: errors.array()
        });
    }
    next();
};
// Validation chains
exports.validateRegister = [
    commonValidations.username(),
    commonValidations.email(),
    commonValidations.password(),
    handleValidationErrors
];
exports.validateLogin = [
    commonValidations.email(),
    commonValidations.password(),
    handleValidationErrors
];
exports.validateText = [
    commonValidations.title(),
    commonValidations.content(),
    handleValidationErrors
];
// For single field validation if needed
exports.validateUsername = [
    commonValidations.username(),
    handleValidationErrors
];
// validation for comments
exports.validateCommentContent = [
    (0, express_validator_1.body)('content')
        .trim()
        .escape()
        .isLength({ min: 1, max: 1000 }) // Changed min to 1 (or whatever minimum you want)
        .withMessage('Comment content must be between 1 and 1000 characters.'),
    handleValidationErrors
];

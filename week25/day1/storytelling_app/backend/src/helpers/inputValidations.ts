import { Request, Response, NextFunction } from 'express';
import { body, validationResult, ValidationChain } from 'express-validator';


type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;
type ValidateArray = Array<ValidationChain | ValidationMiddleware>;

// Common validation rules
const commonValidations = {
    username: () => body('username')
        .trim()
        .escape()
        .isLength({ min: 3, max: 30 })
        .withMessage('Username must be between 3 and 30 characters')
        .matches(/^[a-zA-Z][a-zA-Z0-9_-]*$/)
        .withMessage('Username must start with a letter and can only contain letters, numbers, underscores and hyphens'),

    email: () => body('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid email format'),

    password: () => body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),

    title: () => body('title')
        .trim()
        .escape()
        .isLength({ min: 3, max: 100 })
        .withMessage('Title must be between 3 and 100 characters'),

    content: () => body('content')
        .trim()
        .escape()
        .isLength({ min: 10, max: 1000 })
        .withMessage('Content must be between 10 and 1000 characters')
};

// Common validation middleware
const handleValidationErrors: ValidationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            message: 'Validation failed',
            errors: errors.array() 
        });
    }
    next();
};

// Validation chains
export const validateRegister: ValidateArray = [
    commonValidations.username(),
    commonValidations.email(),
    commonValidations.password(),
    handleValidationErrors
];

export const validateLogin: ValidateArray = [
    commonValidations.email(),
    commonValidations.password(),
    handleValidationErrors
];

export const validateText: ValidateArray = [
    commonValidations.title(),
    commonValidations.content(),
    handleValidationErrors
];

// For single field validation if needed
export const validateUsername: ValidateArray = [
    commonValidations.username(),
    handleValidationErrors
];

// validation for comments
export const validateCommentContent: ValidateArray = [
    body('content')
        .trim()
        .escape()
        .isLength({ min: 1, max: 1000 }) // Changed min to 1 (or whatever minimum you want)
        .withMessage('Comment content must be between 1 and 1000 characters.'),
    handleValidationErrors
];
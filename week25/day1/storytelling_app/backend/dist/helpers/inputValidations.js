"use strict";
// import { Request, Response, NextFunction } from 'express';
// import { body, validationResult, ValidationChain } from 'express-validator';
// type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;
// type ValidateArray = Array<ValidationChain | ValidationMiddleware>;
// // Validation rules for registration
// export const validateRegister: ValidateArray = [
//   body('username')
//     .trim()
//     .escape() // Escapes special characters to prevent SQL injection
//     .isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
//   body('email')
//     .normalizeEmail() // Normalizes email to a standard format
//     .isEmail().withMessage('Invalid email'),
//   body('password')
//     .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
//   // Middleware to check for validation result
//   (req: Request, res: Response, next: NextFunction) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next(); // All good, pass control to the controller
//   }
// ];
// // Validation rules for login
// export const validateLogin: ValidateArray = [
//   body('email')
//     .normalizeEmail()
//     .isEmail().withMessage('Invalid email'),
//   body('password')
//     .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
//   // Middleware to check for validation result
//   (req: Request, res: Response, next: NextFunction) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next(); // All good, pass control to the controller
//   }
// ];
// // Validation rules for texts
// export const validateText: ValidateArray = [
//   body('title')
//     .trim() // Removes leading and trailing whitespace
//     .escape() // Escapes special characters to prevent SQL injection
//     .isLength({ min: 3, max: 100 }).withMessage('Title must be between 3 and 100 characters'),
//   body('content')
//     .trim() // Removes leading and trailing whitespace
//     .escape() // Escapes special characters to prevent SQL injection
//     .isLength({ min: 10, max: 1000 }).withMessage('Content must be between 10 and 1000 characters'),
//   // Middleware to check for validation result
//   (req: Request, res: Response, next: NextFunction) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next(); // All good, pass control to the controller
//   }
// ];
// import { Request, Response, NextFunction } from 'express';
// import { check, validationResult } from 'express-validator';
// import type { ValidationChain } from 'express-validator';
// type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;
// type ValidateArray = Array<ValidationChain | ValidationMiddleware>;
// // Common validation middleware
// const handleValidationErrors: ValidationMiddleware = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ 
//             message: 'Validation failed',
//             errors: errors.array() 
//         });
//     }
//     next();
// };
// // Username validation rules
// const usernameRules = [
//     check('username')  // Changed from body to check
//         .trim()
//         .escape()
//         .isLength({ min: 3, max: 30 })
//         .withMessage('Username must be between 3 and 30 characters')
//         .matches(/^[a-zA-Z0-9_-]+$/)
//         .withMessage('Username can only contain letters, numbers, underscores and hyphens')
//         .not()
//         .matches(/^[0-9]/)
//         .withMessage('Username cannot start with a number')
// ];

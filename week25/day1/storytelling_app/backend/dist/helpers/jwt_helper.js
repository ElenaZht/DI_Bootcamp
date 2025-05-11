"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';
const generateAccessToken = (id, username) => {
    return jsonwebtoken_1.default.sign({ id, username }, // Payload
    JWT_SECRET, // Secret key from .env
    { expiresIn: '1h' } // Token expiration time
    );
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (id, username) => {
    return jsonwebtoken_1.default.sign({ id, username }, // Payload
    JWT_SECRET, // Secret key from .env
    { expiresIn: '7d' } // Token expiration time
    );
};
exports.generateRefreshToken = generateRefreshToken;
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return reject(err); // Token is invalid or expired
            }
            resolve(decoded);
        });
    });
};
exports.verifyToken = verifyToken;

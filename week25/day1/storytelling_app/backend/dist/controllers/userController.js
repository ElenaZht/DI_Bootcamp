"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_helper_1 = require("../helpers/jwt_helper");
const userModel_1 = require("../models/userModel");
const registerUser = async (req, res) => {
    const { password, email, username } = req.body;
    try {
        // Validate required fields
        if (!username?.trim() || !email?.trim() || !password?.trim()) {
            res.status(400).json({ message: 'All fields are required and cannot be empty.' });
            return;
        }
        // Create user
        const user = await (0, userModel_1.createUser)(password, email, username);
        console.log("new user", user);
        if (!user || !user.id) {
            res.status(500).json({ message: 'Failed to create user' });
            return;
        }
        // Generate tokens only if user was created successfully
        const accessToken = (0, jwt_helper_1.generateAccessToken)(user.id, user.username);
        const refreshToken = (0, jwt_helper_1.generateRefreshToken)(user.id, user.username);
        // Set cookies only after successful user creation
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 1000, // 1 hour
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error('Registration error:', error);
        if (error.code === '23505') {
            res.status(409).json({ message: 'Email already exists' });
            return;
        }
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: 'All fields are required.' });
        return;
    }
    try {
        const user = await (0, userModel_1.getUserByEmail)(email);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const passwordMatch = await bcrypt_1.default.compare(password, user.password_hash);
        if (!passwordMatch) {
            res.status(401).json({ message: 'Invalid credentials.' });
            return;
        }
        // Provide new tokens for authorized user
        const newAccessToken = (0, jwt_helper_1.generateAccessToken)(user.id, user.username);
        const newRefreshToken = (0, jwt_helper_1.generateRefreshToken)(user.id, user.username);
        // Update cookies with new tokens
        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 1000, // 1 hour
        });
        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        res.status(200).json({ message: 'Login successfully', newAccessToken });
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.loginUser = loginUser;
const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {
            res.status(401).json({ message: 'Refresh token is missing.' });
            return;
        }
        // Verify the refresh token
        const decoded = await (0, jwt_helper_1.verifyToken)(refreshToken);
        // Generate a new access token
        const newAccessToken = (0, jwt_helper_1.generateAccessToken)(decoded.id, decoded.username);
        // Update the access token cookie
        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 1000, // 1 hour
        });
        res.status(200).json({ message: 'Access token refreshed successfully', accessToken: newAccessToken });
    }
    catch (error) {
        console.error('Error refreshing token:', error);
        res.status(403).json({ message: 'Invalid or expired refresh token.' });
    }
};
exports.refreshToken = refreshToken;

const userModel  = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {generateAccessToken, generateRefreshToken} = require('../helpers/jwt_helper.js')

module.exports = {
    registerUser: async (req, res) => {
        const {password, email, username} = req.body
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required." })
        }

        try {
            const user = await userModel.createUser(password, email, username)
            // Generate a token for the new user
            const accessToken = generateAccessToken(user.id, user.username);
            const refreshToken = generateRefreshToken(user.id, user.username)
            // Save tokens in HTTP-only cookies
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
                maxAge: 60 * 60 * 1000, // 1 hour
            });
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            res.status(200).json({message: 'User registered successfully', accessToken})


        } catch (error) {
            
            console.log(error.message);
            if (error.code === '23505'){
                res.status(400).json({message: 'Email already exists'})
                return
            }
            res.status(500).json({message: 'Internal Server Error'})
        }
    },
    loginUser: async (req, res) => {
        const {email, password} = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required." })
        }

        try {
            const user = await userModel.getUserByEmail(email)
            if (!user){
                res.status(404).json({message: 'User not found'})
                return
            }
            console.log("user from db", user)
            const passwordMatch = await bcrypt.compare(password+'', user.password_hash)
            console.log("passwordMatch", passwordMatch)
            if (!passwordMatch){
                res.status(401).json({message: 'Invalid credentials.'})
                return
            }

            //provide new tokens for authorized user
            const newAccessToken = await generateAccessToken(user.id, user.username)
            const newRefreshToken = await generateRefreshToken(user.id, user.username)

            // Update cookies with new tokens
            res.cookie('accessToken', newAccessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
                maxAge: 60 * 60 * 1000, // 1 hour
            });
            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            //todo save token in redux
            
            res.status(200).json({message: 'Login successfully', newAccessToken})

        } catch (error) {
            res.status(500).json({message: 'Internal server error'})
        }
    },
    refreshToken: async (req, res) => {
        try {
            const { refreshToken } = req.cookies;
    
            if (!refreshToken) {
                return res.status(401).json({ message: 'Refresh token is missing.' });
            }
    
            // Verify the refresh token
            const decoded = await verifyToken(refreshToken);
    
            // Generate a new access token
            const newAccessToken = generateAccessToken(decoded.id, decoded.username);
    
            // Update the access token cookie
            res.cookie('accessToken', newAccessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 1000, // 1 hour
            });
    
            res.status(200).json({ message: 'Access token refreshed successfully', accessToken: newAccessToken });
        } catch (error) {
            console.error('Error refreshing token:', error);
            res.status(403).json({ message: 'Invalid or expired refresh token.' });
        }
    }
}
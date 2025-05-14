import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateAccessToken, generateRefreshToken, verifyToken } from '../helpers/jwt_helper';
import { createUser, getUserByEmail, getUserById, getAllUsersFromDB } from '../models/userModel';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { password, email, username } = req.body;

    try {
        // Validate required fields
        if (!username?.trim() || !email?.trim() || !password?.trim()) {
            res.status(400).json({ message: 'All fields are required and cannot be empty.' });
            return;
        }

        // Create user
        const user = await createUser(password, email, username);
        console.log("new user", user)
        
        if (!user || !user.id) {
            res.status(500).json({ message: 'Failed to create user' });
            return;
        }
        // Generate tokens only if user was created successfully
        const accessToken = generateAccessToken(user.id, user.username);
        const refreshToken = generateRefreshToken(user.id, user.username);
        
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(201).json({ message: 'User registered successfully', accessToken });
        
    } catch (error: any) {
        console.error('Registration error:', error);
        
        if (error.code === '23505') {
            res.status(409).json({ message: 'Email already exists' });
            return;
        }
        
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: 'All fields are required.' });
        return;
    }

    try {
        const user = await getUserByEmail(email);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password_hash);
        if (!passwordMatch) {
            res.status(401).json({ message: 'Invalid credentials.' });
            return;
        }

        // Provide new tokens for authorized user
        const newAccessToken = generateAccessToken(user.id!, user.username);
        const newRefreshToken = generateRefreshToken(user.id!, user.username);

        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(200).json({ message: 'Login successfully', newAccessToken, user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const refreshToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            res.status(401).json({ message: 'Refresh token is missing.' });
            return;
        }

        // Verify the refresh token
        const decoded = await verifyToken(refreshToken);

        // Generate a new access token
        const newAccessToken = generateAccessToken(decoded.id, decoded.username);



        res.status(200).json({ message: 'Access token refreshed successfully', accessToken: newAccessToken, user_id: decoded.id });
    } catch (error) {
        console.error('Error refreshing token:', error);
        res.status(403).json({ message: 'Invalid or expired refresh token.' });
    }
};

export const logoutUser = async (req: Request, res: Response): Promise<void> => {
    try {
        // Clear the refresh token cookie
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/'
        });
        
        res.status(200).json({ message: 'Logged out successfully' });

    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Error during logout' });
    }
};

export const getUserInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id;
        
        const user = await getUserById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json({user});
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Failed to fetch user information' });
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUsers = await getAllUsersFromDB()
        if (allUsers.length > 0){
            res.status(200).json({allUsers})
            return 
        }
        res.status(404).json({message: "Users not found."})

    } catch (error) {
        console.log("Failed to fetch all users.")
    }
}
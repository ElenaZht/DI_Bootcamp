import { verifyToken } from './jwt_helper';
import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                username: string;
            };
        }
    }
}


export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.cookies?.accessToken;

    if (!token) {
        res.status(401).json({ message: 'Access token is missing.' });
        return 
    }

    try {
        const decoded = await verifyToken(token);
        req.user = decoded; // Attach decoded user info to the request object with a specific type
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(403).json({ message: 'Invalid or expired access token.' });
    }
};
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
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Authorization header is missing or malformed.' });
        return;
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = await verifyToken(token) as { id: string; username: string };
        req.user = decoded;
        next();
        
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ message: 'Invalid or expired access token.' });
    }
};
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'default_secret_key';

export interface TokenPayload extends JwtPayload {
    id: string;
    username: string;
}

export const generateAccessToken = (id: string, username: string): string => {
    return jwt.sign(
        { id, username }, // Payload
        JWT_SECRET, // Secret key from .env
        { expiresIn: '1h' } // Token expiration time
    );
};

export const generateRefreshToken = (id: string, username: string): string => {
    return jwt.sign(
        { id, username }, // Payload
        JWT_SECRET, // Secret key from .env
        { expiresIn: '7d' } // Token expiration time
    );
};

export const verifyToken = (token: string): Promise<TokenPayload> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return reject(err); // Token is invalid or expired
            }
            resolve(decoded as TokenPayload);
        });
    });
};
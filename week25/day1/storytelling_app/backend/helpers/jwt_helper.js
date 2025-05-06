const jwt = require('jsonwebtoken')

const generateAccessToken = (id, username) => {
    return jwt.sign(
        { id, username }, // Payload
        process.env.JWT_SECRET, // Secret key from .env
        { expiresIn: '1h' } // Token expiration time
    );
};

const generateRefreshToken = (id, username) => {
    return jwt.sign(
        { id, username }, // Payload
        process.env.JWT_SECRET, // Secret key from .env
        { expiresIn: '7d' } // Token expiration time
    );
};

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return reject(err); // token is invalid or expired
            }
            resolve(decoded);
        });
    });
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyToken
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jwt_helper_1 = require("./jwt_helper");
const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Authorization header is missing or malformed.' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = await (0, jwt_helper_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ message: 'Invalid or expired access token.' });
    }
};
exports.authenticate = authenticate;

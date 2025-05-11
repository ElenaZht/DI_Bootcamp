"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jwt_helper_1 = require("./jwt_helper");
const authenticate = async (req, res, next) => {
    const token = req.cookies?.accessToken;
    if (!token) {
        res.status(401).json({ message: 'Access token is missing.' });
        return;
    }
    try {
        const decoded = await (0, jwt_helper_1.verifyToken)(token);
        req.user = decoded; // Attach decoded user info to the request object with a specific type
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        console.error('Authentication error:', error);
        res.status(403).json({ message: 'Invalid or expired access token.' });
    }
};
exports.authenticate = authenticate;

const { verifyToken } = require('../helpers/jwt_helper.js');

const authenticate = async (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing.' });
    }

    try {
        const decoded = await verifyToken(token);
        req.user = decoded; // Attach decoded user info to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(403).json({ message: 'Invalid or expired access token.' });
    }
};

module.exports = authenticate;
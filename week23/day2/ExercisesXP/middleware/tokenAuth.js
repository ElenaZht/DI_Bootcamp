const jwt = require('jsonwebtoken')
require('dotenv').config()


const {ACCESS_TOKEN_SECRET} = process.env

const verifyToken = (req, res, next) => {
    const token = req.cookies['token']

    if (!token){
        res.status(401).json({message: 'User unathorized'})
        return
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err) => {
        if (err){
            res.status(403).json({message: 'Email or password incorrect'})
            return
        }
    })


    next()
}


module.exports = {
    verifyToken
}
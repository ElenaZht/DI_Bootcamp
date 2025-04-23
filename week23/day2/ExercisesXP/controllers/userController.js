const userModel  = require('../models/userModel.js')
const bcrypt = require('bcrypt')

const signUpUser = async (req, res) => {
    const {email, password} = req.body
    // validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        res.status(400).json({message: 'invalid email format'})
        return
    }
    if(password.length < 6){
        res.status(400).json({message: 'short password(min 6 symbols)'})
        return
    }

    try {
        const newUserToken = await userModel.addUser(email, password)
        res.cookie('token', newUserToken, {
            maxAge: 60000,
            httpOnly: true
        })
        res.status(200).json({message: `user ${email} signed up successfully`})
        
    } catch (error) {
        if (error.status === 409){
            res.status(409).json({message: `user with email ${email} already exist`})
            return
        }
        res.status(500).json({message: `internal server error ${error}`})
    }
}

const logInUser = async (req, res) => {
    const {email, password} = req.body

    // validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        res.status(400).json({message: 'invalid email format'})
        return
    }
    if(password.length < 6){
        res.status(400).json({message: 'short password(min 6 symbols)'})
        return
    }
    const user = await userModel.getUserFromDBByEmail(email)
    if (!user || !user.email || !user.password){
        res.status(404).json({message: 'Valid user not found'})
        return
    }

    //password comparation
    const passwordMatch = await bcrypt.compare(password+'', user.password)
    if (!passwordMatch){
        res.status(401).json({message: 'wrong password'})
        return
    }

    //update token in cookie
    const newToken = userModel.generateToken(user, 60000)
    res.cookie('token', newToken, {
        maxAge: 60000,
        httpOnly: true
    })
    res.status(200).json({message: 'Logged In successfully'})
}

const updateToken = (req, res) => {
    const newToken = userModel.generateToken(req.body, 60000)
    res.cookie('token', newToken, {
        maxAge: 60000,
        httpOnly: true
    })
    res.status(200).json({message: 'Token updated successfully'})
}

const logOutUser = async (req, res) => {
    // clean the token cookie
    res.clearCookie('token') // sent Set-Cookie header with past inspiration date 
                            // to let the client delete it
    // for success we need to know exactly how cookie was set. otherwise client may not
    // recognize the command. 
    // additional cleaning to safety: clean the request on server side
    req.cookies['token'] = null
    delete req.cookies.token

    //  remove token from table users on db
    await userModel.setUserTokenToNull(req.email)

    // send response
    res.sendStatus(200)

}

const editUser = async (req, res) => {
    const {email, newEmail='', newPassword=''} = req.body
    if (!email){
        res.status(400).json({message: 'user not providered'})
        return
    }

    const hashedPassword = await bcrypt.hash(newPassword+'', 10)
    await userModel.editUserInfo(email, {email: newEmail, password: hashedPassword})
    res.status(200).json({message: 'User information updated successfully'})
}

module.exports = {signUpUser, logInUser, updateToken, logOutUser, editUser}
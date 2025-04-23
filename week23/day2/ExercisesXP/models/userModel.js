const {db} = require('../config/db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const generateToken = (payload, expires) => {
    const {ACCESS_TOKEN_SECRET} = process.env
    const token = jwt.sign(
        payload,
        ACCESS_TOKEN_SECRET,
        {expiresIn: 1000 * expires}
    )
    return token
}

const addUser = async(email, password) => {
    //check for existing user with email
    const existingUser = await db('users')
        .where({email: email.toLowerCase()})
        .first()
    if (existingUser){
        const error = new Error('User already exists')
        error.status = 409 // Conflict
        throw error
    }

    const trx = await db.transaction() //Start transaction
    const hashedPassword = await bcrypt.hash(password+'', 10) // 10 is salt
    const userToken = generateToken( {email: email.toLowerCase(),  password: hashedPassword}, 60)
    try {
        
        const [user] = await trx('users').insert({
            email: email.toLowerCase(),
            password: hashedPassword,
            token: '' // prevent token to be null
        }, ['email']) // to return from db

        await trx.commit() // save changes
        return userToken
        
    } catch (error) {
        await trx.rollback() //undo all changes
        throw error
    }
}

const getUserFromDBByEmail = async (email) => {
    try {
        const user = await db('users')
            .select('email', 'password')
            .where({email: email.toLowerCase()})
            .first()

            return user
        
    } catch (error) {
        throw error
    }
}

const setUserTokenToNull = async (email) => {
    try {
        await db('users').where({email: email.toLowerCase()}).update({ token: null })
        
    } catch (error) {
        throw error
    }
}

const editUserInfo = async (email, updates) => {
    try {
        await db('users').where({email: email.toLowerCase()}).update({
            email: updates.email ? updates.email.toLowerCase() : email.toLowerCase(),
            password: updates.password,
        })
        
    } catch (error) {
        throw error
    }
}

module.exports = {
    generateToken,
    addUser,
    getUserFromDBByEmail,
    setUserTokenToNull,
    editUserInfo
}
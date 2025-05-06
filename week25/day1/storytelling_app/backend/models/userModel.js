const {db} = require('../db/db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {generateAccessToken, generateRefreshToken} = require('../helpers/jwt_helper.js');


module.exports = {
    createUser: async(password, email, username) => {
        const trx = await db.transaction()
        try {
            //hash the password 
            const hashPassword = await bcrypt.hash(password+'', 10)// 10 is salt
            const [user] = await trx('users').insert({
                username: username,
                email: email.toLowerCase(),
                password_hash: hashPassword,
            }, ['email', 'id']) // to return from db

            await trx.commit()
            return user
            
        } catch (error) {
            await trx.rollback()
            console.log(error)
            throw error 
        }
    },
    getUserByEmail: async(email) => {
        try {
            const user = await db('users')
            .select('id', 'username', 'password_hash')
            .where({email: email.toLowerCase()})
            .first()

            return user

        } catch (error) {
            throw error
        }
    },

}
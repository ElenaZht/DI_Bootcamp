"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByEmail = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../db/db");
const createUser = async (password, email, username) => {
    const trx = await db_1.db.transaction();
    try {
        // Hash the password
        const hashPassword = await bcrypt_1.default.hash(password, 10); // 10 is the salt rounds
        const [user] = await trx('users').insert({
            username: username,
            email: email.toLowerCase(),
            password_hash: hashPassword,
        }, ['id', 'username', 'email', 'password_hash'] // Return these fields from the database
        );
        await trx.commit();
        return user;
    }
    catch (error) {
        await trx.rollback();
        console.error(error);
        throw error;
    }
};
exports.createUser = createUser;
const getUserByEmail = async (email) => {
    try {
        const user = await (0, db_1.db)('users')
            .select('id', 'username', 'password_hash', 'email')
            .where({ email: email.toLowerCase() })
            .first();
        return user;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
exports.getUserByEmail = getUserByEmail;

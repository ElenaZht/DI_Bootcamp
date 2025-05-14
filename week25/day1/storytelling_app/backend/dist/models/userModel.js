"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommentToStory = exports.getStoryCommentsById = exports.getAllUsersFromDB = exports.getUserById = exports.getUserByEmail = exports.createUser = void 0;
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
const getUserById = async (id) => {
    try {
        const user = await (0, db_1.db)('users')
            .select('id', 'username', 'email')
            .where({ id })
            .first();
        return user;
    }
    catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};
exports.getUserById = getUserById;
const getAllUsersFromDB = async () => {
    try {
        const users = await (0, db_1.db)('users')
            .select('id', 'username', 'email');
        return users;
    }
    catch (error) {
        console.error('Error fetching all users:', error);
        throw error;
    }
};
exports.getAllUsersFromDB = getAllUsersFromDB;
const getStoryCommentsById = async (story_id) => {
    try {
        const comments = await (0, db_1.db)('comments')
            .select('comments.id', 'comments.story_id', 'comments.user_id', 'comments.content', 'comments.created_at', 'users.username as username' // Select username from the users table
        )
            .join('users', 'comments.user_id', 'users.id') // Join with users table
            .where('comments.story_id', story_id)
            .orderBy('comments.created_at', 'desc'); // Order by creation date, newest first
        return comments;
    }
    catch (error) {
        console.error(`Error fetching comments for story_id ${story_id}:`, error);
        throw error;
    }
};
exports.getStoryCommentsById = getStoryCommentsById;
const addCommentToStory = async (user_id, story_id, content) => {
    if (!story_id || !user_id || !content) {
        throw new Error("Story ID, User ID, and content are required to add a comment.");
    }
    try {
        // Insert the new comment and get its ID
        const result = await (0, db_1.db)('comments')
            .insert({
            story_id: story_id,
            user_id: user_id,
            content: content,
        });
        if (Array.isArray(result) && result.length === 0 && db_1.db.client.config.client === 'pg') {
            throw new Error("Failed to create comment.");
        }
    }
    catch (error) {
        console.error(`Error adding comment to story_id ${story_id}:`, error);
        throw error;
    }
};
exports.addCommentToStory = addCommentToStory;

import bcrypt from 'bcrypt';
import { db } from '../db/db';
import type { User } from '../../../types/UserTypes';


export interface PublicUser {
    id?: string;
    username: string;
    email: string;
}
interface Comment {
    id: string;
    story_id: string;
    user_id: string;
    username?: string;
    content: string;
    created_at: string;
  }

export const createUser = async (password: string, email: string, username: string): Promise<User> => {
    const trx = await db.transaction();
    try {
        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
        const [user] = await trx<User>('users').insert(
            {
                username: username,
                email: email.toLowerCase(),
                password_hash: hashPassword,
            },
            ['id', 'username', 'email', 'password_hash'] // Return these fields from the database
        );

        await trx.commit();
        return user;

    } catch (error) {
        await trx.rollback();
        console.error(error);
        throw error;
    }
};

export const getUserByEmail = async (email: string): Promise<User | undefined> => {
    try {
        const user = await db<User>('users')
            .select('id', 'username', 'password_hash', 'email')
            .where({ email: email.toLowerCase() })
            .first();

        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getUserById = async (id: string): Promise<PublicUser | undefined> => {
    try {
        const user = await db<PublicUser>('users')
            .select('id', 'username', 'email')
            .where({ id })
            .first();

        return user;

    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export const getAllUsersFromDB = async (): Promise<PublicUser[]> => {
    try {
        const users = await db<PublicUser>('users')
            .select('id', 'username', 'email');
        return users;

    } catch (error) {
        console.error('Error fetching all users:', error);
        throw error;
    }
}

export const getStoryCommentsById = async (story_id: string): Promise<Comment[]> => {
    try {
        const comments = await db<Comment>('comments')
            .select(
                'comments.id',
                'comments.story_id',
                'comments.user_id',
                'comments.content',
                'comments.created_at',
                'users.username as username' // Select username from the users table
            )
            .join('users', 'comments.user_id', 'users.id') // Join with users table
            .where('comments.story_id', story_id)
            .orderBy('comments.created_at', 'desc'); // Order by creation date, newest first

        return comments;
        
    } catch (error) {
        console.error(`Error fetching comments for story_id ${story_id}:`, error);
        throw error;
    }
}

export const addCommentToStory = async (user_id: string, story_id:string, content: string): Promise<void> => {
    if (!story_id || !user_id || !content){
        throw new Error("Story ID, User ID, and content are required to add a comment.");

    }
    try {
        // Insert the new comment and get its ID
        const result = await db('comments')
            .insert({
                story_id: story_id, 
                user_id: user_id,  
                content: content,
            })
            if (Array.isArray(result) && result.length === 0 && db.client.config.client === 'pg') {
                throw new Error("Failed to create comment.");
           }


    } catch (error) {
        console.error(`Error adding comment to story_id ${story_id}:`, error);
        throw error; // Re-throw the error to be handled by the controller
    }
}
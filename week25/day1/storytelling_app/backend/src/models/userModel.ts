import bcrypt from 'bcrypt';
import { db } from '../db/db';

export interface User {
    id?: string;
    username: string;
    email: string;
    password_hash: string;
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
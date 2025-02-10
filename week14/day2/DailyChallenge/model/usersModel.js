import { db } from '../config/db.js';

export const getAllUsersFromDB = () => {
  return db.raw("select id, email, username, first_name, last_name from users");
};

export const getUserByIdFRomDB = (id) => {
    return db.raw("select id, email, username, first_name, last_name from users where id = ?", [id]);
};

export const updateUserInDB = (id, updatedData) => {
    return db("users")
        .where({ id })
        .update(updatedData)
        .returning(["id", "email", "username", "first_name", "last_name"]);
};

export const addUserToDB = async (user) => {

    // Start a transaction
    await db.transaction(async (trx) => {

    // Insert into the hashpwd table and get the inserted id
    const [hashpwdData] = await trx('hashpwd')
    .insert({ username: user.username, password: user.password })
    .returning('id'); // Returning the 'id' generated for the hashpwd table
    user.id =  hashpwdData.id;   
    
    delete user.password;

    // Insert into the users table and get the full user object
    const [userData] = await trx('users')
        .insert({...user})
        .returning(['id', 'email', 'username', 'first_name', 'last_name']); // Returning the user data you want

        // No need to manually commit, it is done automatically on success
        return userData;
    });
 
 };

 export const getUserHashByUsername = async (username) => {
    return db('hashpwd')
      .select('password') 
      .where('username', username)
      .first();
 }

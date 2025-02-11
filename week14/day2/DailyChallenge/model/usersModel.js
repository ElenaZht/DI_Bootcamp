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

    await db.transaction(async (trx) => { // trx - transaction object in Knex.js. 
    // use this object (trx) instead of the default db instance to 
    // ensure all the queries are executed as a single unit of work.

    // Insert into the hashpwd table and get the inserted id
    const [hashpwdData] = await trx('hashpwd') //trx('hashpwd') instead of db('hashpwd').
    //[hashpwdData] array destructuring to directly extract the first row returned 
    // by the query because returning() always returns an array
    .insert({ username: user.username, password: user.password })
    .returning('id'); // Returning the 'id' generated for the hashpwd table
    user.id =  hashpwdData.id;   
    
    delete user.password; //Always separate password storage 
    // from user information and ensure passwords are hashed 
    // and securely managed in a dedicated table, as you've done here.

    // Insert into the users table and get the full user object
    const [userData] = await trx('users')
        .insert({...user})
        .returning(['id', 'email', 'username', 'first_name', 'last_name']);

        // commit is done automatically on success
        return userData;
    });
 
 };

 export const getUserHashByUsername = async (username) => {
    return db('hashpwd')
      .select('password') 
      .where('username', username)
      .first();//SELECT password FROM hashpwd WHERE username = 'exampleUser' LIMIT 1;
    //get 1 row from table, get {} instead of [{}]
 }

import { getAllUsersFromDB, getUserByIdFRomDB, updateUserInDB, addUserToDB, getUserHashByUsername } from '../model/usersModel.js';
import bcrypt from "bcrypt";

const saltRounds = 10;// for bcrypt

export const getAllUsers = (req, res) => {
    // Retrieve a list of all registered users from the database
  getAllUsersFromDB() // DB queries return promises
    .then(data => {
      res.json(data.rows);
    })
    .catch(e => {
      console.log(e);
      res.status(404).json({ message: "No users found" });
    });
};

export const getUserById = (req, res) => {
    // Retrieve a specific user by ID from the database
    const id = req.params.id
    getUserByIdFRomDB(id)
    .then(data => {
        res.json(data.rows);
      })
      .catch(e => {
        console.log(e);
        res.status(404).json({ message: "User not found" });
      });
}

export const updateUser = (req, res) => {
    const id = req.params.id;
    const { email, username, first_name, last_name } = req.body;

    if (!email || !username || !first_name || !last_name) {
        return res.status(400).json({ message: "All fields are required." });
    }

    updateUserInDB(id, { email, username, first_name, last_name })
        .then(data => {
            if (!data.length) {
                return res.status(404).json({ message: "User not found." });
            }
            res.json(data[0]);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: "User not updated." });
        });
};

export const addUser = async(req, res) => {
    const { email, username, first_name, last_name, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const userData = await addUserToDB({ email, username, first_name, last_name, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully!", user: userData });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration failed." });
    }
}

export const loginUser = async(req, res) => {
    const { username, password } = req.body;
    try{
        const hashedPasswordDB = await getUserHashByUsername(username)
        const compareResult = await bcrypt.compare(password, hashedPasswordDB.password)
        if (!compareResult) {
            res.status(401).json({ message: "Username or password are incorrect." });
            return
        }

        res.status(200).json({"messege": "Authorized"})

    } catch (error) {
        res.status(401).json({ message: "Username or password are incorrect." });
    }
    
    

}
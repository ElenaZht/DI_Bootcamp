import { usersContentLoader, usersContentUploader } from '../model/usersModel.js';
import { hashesContentLoader, hashesContentUploader } from '../model/hashesModel.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;
import { v4 as uuidv4 } from 'uuid';


export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await usersContentLoader();
        if (allUsers) {
            res.status(200).json(allUsers);
        } else {
            res.status(404).json({ "message": "users not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": error });
    }
};


export const getUserByID = async (req, res) => {
    try {
        const users = await usersContentLoader();
        const user = users.find(u => u.id === +req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ "message": "user not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": error });
    }
};


export const updateUser = async (req, res) => {
    if (req.body && req.params.id) {
        const users = await usersContentLoader();
        const user = users.find(u => u.id.toString() === req.params.id);
        console.log('before update', user)
        if (user !== undefined) {
            
            if (req.body.firstName) {
                user.firstName = req.body.firstName;
            }
            if (req.body.lastName) {
                user.lastName = req.body.lastName;
            }
            if (req.body.email) {
                user.email = req.body.email;
            }
            //change username
            if (req.body.username) {
                const allHashes = await hashesContentLoader()
                const hashIndex = allHashes.findIndex(h => h.id === req.params.id);
                if (hashIndex != -1){
                    allHashes[hashIndex].username = req.body.username;
                } else {
                    res.status(404).json({ "message": "hash not found" });
                }
                await hashesContentUploader(allHashes);
                
            }
            // change password
            if (req.body.password) {
                const allHashes = await hashesContentLoader()
                const hashIndex = allHashes.findIndex(h => h.id === req.params.id);
                const newHashedPassword = await bcrypt.hash(req.body.password, saltRounds);
                allHashes[hashIndex].password = newHashedPassword;
                await hashesContentUploader(allHashes);
                
            }
            await usersContentUploader(users)
            res.status(200).json({ "message": "user updated successfully" });

        } else {
            res.status(404).json({ "message": "user not found" });
        }
    } else {
        res.status(403).json({ "message": "id and new information required" });
    }
};


export const registerUser = async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {

        // Add new user to users.json
        const allUsers = await usersContentLoader();
        //check if username unique
        if (allUsers.find(u => u.username === username)){
            res.status(409).json({ "message": "User already exists" });
            return null
        }
        const newUserId = uuidv4();
        const hashedPassword = await bcrypt.hash(String(password), saltRounds); // bcrypt recieve string pass only
        const { firstName = null, lastName = null, email = null } = req.body;

        allUsers.push({
            "id": newUserId,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "username": username
        });
        await usersContentUploader(allUsers);

        // Add new hash to hashes.json
        const allHashes = await hashesContentLoader();
        allHashes.push({
            "id": newUserId,
            "username": username,
            "password": hashedPassword
        });
        await hashesContentUploader(allHashes);

        res.status(200).json({ "message": "registered successfully" });

    } else {
        res.status(403).json({ "message": "username or password is missing" });
    }
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body
    if (username && password){
        const allHashes = await hashesContentLoader()
        const hashIndex = allHashes.findIndex(h => h.username === username)
        if (hashIndex != -1){
            const isMatch = await bcrypt.compare(password, allHashes[hashIndex].password)
            if (isMatch){
                res.status(200).json({"message": "logged in successfuly"})
                return
            } else {
                res.status(401).json({"message": "username or password incorrect"})
                return
            }

        } else {
            res.status(404).json({ "message": "users not found" });
            return
        }

    } else {
        res.status(403).json({ "message": "username or password is missing" });
    }
}

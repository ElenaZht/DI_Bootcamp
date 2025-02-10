import { getPostsFromDB, getPostByIdFromDB, addPostToDB, updatePostInDB, deletePostFromDB } from '../models/postsModel.js'

export const getPosts = async(req, res) => {
    // Return a list of all blog posts.
    getPostsFromDB()
    .then(data => {
        res.json(data.rows)
    })
    .catch(e => {
        console.log(e);
        res.status(404).json({ message: "Not found" });
      });
}

export const getPostById = async(req, res) => {
    // Return a specific blog post based on its id
    getPostByIdFromDB(req.params.id)
    .then(data => {
        res.json(data.rows)
    })
    .catch(e => {
        console.log(e);
        res.status(404).json({ message: "Not found" });
      });
}

export const addPost = async(req, res) => {
    // Create a new blog post
    const {title, content} = req.body
    addPostToDB(title, content)
    .then(data => {
        res.json(data.rows)
    })
    .catch(e => {
        console.log(e);
        res.status(500).json({ message: "Server error" });
      });
}

export const updatePost = async (req, res) => {
    const { id } = req.params; 
    const { title, content } = req.body;
    
    try {
        const data = await updatePostInDB(id, title, content);  
        res.json(data);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
};


export const deletePost = async(req, res) => {
    // Delete a blog post
    const { id } = req.params; 
    try {
        const data = await deletePostFromDB(id);  
        res.json(data);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
}
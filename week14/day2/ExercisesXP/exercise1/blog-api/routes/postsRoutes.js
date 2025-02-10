import express from 'express'
import { getPosts, getPostById, addPost, updatePost, deletePost } from '../controllers/postsController.js'

const router = express.Router()

router.get('/posts', getPosts)
router.get('/posts/:id', getPostById)
router.post('/posts', addPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)

export default router
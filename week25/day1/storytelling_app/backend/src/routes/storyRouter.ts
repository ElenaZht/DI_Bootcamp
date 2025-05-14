import { Router } from 'express';
import { 
    fetchStories, 
    addNewStory, 
    editStory, 
    deleteStory,
    getStoryComments,
    addComment
} from '../controllers/storyController';
import {isAuthor, isAuthorOrColaborator} from '../helpers/permissions'
import { authenticate } from '../helpers/auth';
import {validateText, validateCommentContent} from '../helpers/inputValidations'


const router = Router();

router.get('/', authenticate, fetchStories);
router.post('/', authenticate, validateText, addNewStory);
router.patch('/:id', authenticate, isAuthorOrColaborator, editStory) // validate inputs
router.delete('/:id', authenticate, isAuthor, deleteStory)
router.get('/:id/comments', authenticate, getStoryComments)
router.post('/:id/comments', authenticate, validateCommentContent, addComment)


export default router;
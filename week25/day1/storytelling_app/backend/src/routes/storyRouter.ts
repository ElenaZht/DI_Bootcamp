import { Router } from 'express';
import { fetchStories, addNewStory, editStory, deleteStory, } from '../controllers/storyController';
// import { validateText } from '../helpers/inputValidations';
import {isAuthor, isAuthorOrColaborator} from '../helpers/permissions'
import { authenticate } from '../helpers/auth';


const router = Router();

router.get('/', authenticate, fetchStories);
// router.post('/', authenticate, validateText, addNewStory);
router.post('/', authenticate, addNewStory);
router.patch('/:id', authenticate, isAuthorOrColaborator, editStory) // validate inputs
router.delete('/:id', authenticate, isAuthor, deleteStory)


export default router;
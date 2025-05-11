import { Router } from 'express';
import { authenticate } from '../helpers/auth';
import { addContributor, getAllStoryContributor, deleteContributor } from '../controllers/contributorController';
import { isAuthor } from '../helpers/permissions';

const router = Router();

router.post('/', authenticate, isAuthor, addContributor)
router.get('/:story_id', authenticate, getAllStoryContributor)
router.delete('/:id', authenticate, isAuthor, deleteContributor)

export default router;
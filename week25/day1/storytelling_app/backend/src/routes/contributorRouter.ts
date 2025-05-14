import { Router } from 'express';
import { authenticate } from '../helpers/auth';
import { addContributor, getAllStoryContributor, deleteContributor } from '../controllers/contributorController';
import { isAuthor, canManageContributors } from '../helpers/permissions';

const router = Router();

router.post('/', authenticate, isAuthor, addContributor)
router.get('/:story_id', authenticate, getAllStoryContributor)
router.delete('/:id', authenticate, canManageContributors, deleteContributor)

export default router;
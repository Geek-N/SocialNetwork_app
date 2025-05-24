import { Router } from 'express';
import { addReaction, deleteReaction} from '../../controllers/reactionController.js';

const router = Router({ mergeParams: true });

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


export { router as reactionRouter };


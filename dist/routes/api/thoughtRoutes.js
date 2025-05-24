import { Router } from 'express';
import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, removeReaction } from '../../controllers/thoughtController';
const router = Router();
// Route to get all thoughts or create a new one
router.route('/')
    .get(getThoughts)
    .post(createThought);
// Route to get, update, or delete a single thought
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
// Route to add a reaction to a thought
router.route('/:thoughtId/reactions')
    .post(addReaction);
// Route to remove a specific reaction from a thought
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);
export default router;

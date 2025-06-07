// ✅ Updated routes/api/thoughtRoutes.js with consistent param names and full route wiring

const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// ✅ /api/thoughts - GET all thoughts, POST new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// ✅ /api/thoughts/:thoughtId - GET, PUT, DELETE a single thought
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// ✅ /api/thoughts/:thoughtId/reactions - POST add reaction
router.post('/:thoughtId/reactions', addReaction);

// ✅ /api/thoughts/:thoughtId/reactions/:reactionId - DELETE reaction
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
// ✅ End of file

// ✅ Updated controllers/thoughtController.js with corrected param names

const { Thought, User } = require('../models');

const thoughtController = {
  // ✅ Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .select('-__v')
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // ✅ Get a single thought by ID
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }) // ✅ changed from req.params.id
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // ✅ Create a new thought and associate it with a user
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Thought created but no user found with this id!' })
          : res.json({ message: 'Thought successfully created!' })
      )
      .catch((err) => res.status(500).json(err));
  },

  // ✅ Update a thought by ID
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId }, // ✅ changed from req.params.id
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // ✅ Delete a thought and remove it from the associated user's thoughts
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId }) // ✅ changed from req.params.id
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId }, // ✅ match the ID reference
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then(() => res.json({ message: 'Thought successfully deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  // ✅ Add a reaction to a thought
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // ✅ Remove a reaction from a thought
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = thoughtController;
// ✅ End of file

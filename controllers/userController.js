// controllers/userController.js — handles user-related API logic
const { User, Thought } = require('../models'); // import User and Thought models

const userController = {
  // GET all users
  getAllUsers(req, res) {
    User.find({})
      .select('-__v') // exclude version key
      .then(users => res.json(users)) // send user data
      .catch(err => res.status(500).json(err)); // send error if any
  },

  // GET user by ID with populated thoughts and friends
  getUserById(req, res) {
    User.findOne({ _id: req.params.id })
      .populate('thoughts') // populate thoughts array
      .populate('friends') // populate friends array
      .select('-__v') // exclude version key
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this id' }); // user not found
        }
        res.json(user); // send user data
      })
      .catch(err => res.status(500).json(err)); // send error if any
  },

  // POST create new user
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user)) // send created user
      .catch(err => res.status(400).json(err)); // validation error or other
  },

  // PUT update user by ID
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true } // return updated doc, validate input
    )
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this id' }); // user not found
        }
        res.json(user); // send updated user
      })
      .catch(err => res.status(400).json(err)); // validation error or other
  },

  // DELETE user by ID and remove associated thoughts (bonus)
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this id' }); // user not found
        }
        // remove user's thoughts
        return Thought.deleteMany({ username: user.username }) // delete thoughts matching user's username
          .then(() => {
            res.json({ message: 'User and associated thoughts deleted!' }); // confirm deletion
          });
      })
      .catch(err => res.status(500).json(err)); // send error if any
  },
};

module.exports = userController; // export controller
// end of file

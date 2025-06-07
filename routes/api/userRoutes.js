const router = require('express').Router();
const userController = require('../../controllers/userController'); // import userController

// GET /api/users — get all users
router.get('/', userController.getAllUsers);

// GET /api/users/:id — get user by ID
router.get('/:id', userController.getUserById);

// POST /api/users — create new user
router.post('/', userController.createUser);

// PUT /api/users/:id — update user by ID
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id — delete user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;

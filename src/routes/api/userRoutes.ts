import { Router } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser, addFriend, removeFriend } from '../../controllers/userController.js';

const router = Router();

router.post('/', createUser);  
router.get('/', getAllUsers);  
router.get('/:userId', getUserById); 
router.put('/:userId', updateUser);  
router.delete('/:userId', deleteUser); 

router.post('/:userId/friends/:friendId', addFriend);      
router.delete('/:userId/friends/:friendId', removeFriend);  

export { router as userRouter };

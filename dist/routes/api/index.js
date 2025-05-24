import { Router } from 'express';
import { userRouter } from './userRoutes.js'; //Routes to users
import thoughtRouter from './thoughtRoutes.js';
import { reactionRouter } from './reactionRoutes.js'; // Routes to reactions
const router = Router();
// Using the routes
router.use('/users', userRouter); // Routes to users
router.use('/thoughts', thoughtRouter); // Routes to thoughts
router.use('/thoughts', reactionRouter); // Routes to reactions
export default router;

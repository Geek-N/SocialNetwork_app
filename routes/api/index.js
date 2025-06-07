// routes/api/index.js — combines user and thought routes for /api

const router = require('express').Router(); // create router
const userRoutes = require('./userRoutes'); // import user routes
const thoughtRoutes = require('./thoughtRoutes'); // import thought routes

router.use('/users', userRoutes); // mount user routes at /api/users
router.use('/thoughts', thoughtRoutes); // mount thought routes at /api/thoughts

module.exports = router; // export the router
// end of file

// routes/index.js — root router to combine all routes
const router = require('express').Router();
const apiRoutes = require('./api'); // imports routes/api/index.js

router.use('/api', apiRoutes); // Mount API under /api

// 404 fallback
router.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = router;

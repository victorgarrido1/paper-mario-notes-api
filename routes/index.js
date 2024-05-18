// Import statements
const router = require('express').Router();
const apiRoutes = require('./api'); // Correcting the import path

// Middleware for API routes
// router.use('/api', apiRoutes);

// Middleware for handling undefined routes
router.use((req, res) => {
  res.status(404).send('Whoops, wrong route!');
});

// Export the router
module.exports = router;

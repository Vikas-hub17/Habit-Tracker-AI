const express = require('express');
const router = express.Router();

// Example route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route is working!' });
});

module.exports = router; // Ensure this is correctly exporting the router

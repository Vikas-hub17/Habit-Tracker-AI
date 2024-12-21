const express = require('express');
const { createHabit } = require('../controllers/habitController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createHabit);

module.exports = router; // Ensure you're exporting the router

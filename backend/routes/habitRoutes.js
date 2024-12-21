const express = require('express');
const { createHabit } = require('../controllers/habitController');
const authMiddleware = require('../middleware/authMiddleware'); // JWT-based authentication middleware

const router = express.Router();

router.post('/', authMiddleware, createHabit);

module.exports = router;

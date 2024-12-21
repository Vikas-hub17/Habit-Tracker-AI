const express = require('express');
const { getUser, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getUser);
router.put('/', authMiddleware, updateUser);

module.exports = router;

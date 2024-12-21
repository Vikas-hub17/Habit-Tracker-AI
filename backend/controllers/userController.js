const connection = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getUser = (req, res) => {
  const query = `SELECT user_id, name, email FROM users WHERE user_id = ?`;
  connection.query(query, [req.user.id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(result[0]);
  });
};

exports.updateUser = (req, res) => {
  const { name, email, password } = req.body;

  const query = `UPDATE users SET name = ?, email = ?, password = ? WHERE user_id = ?`;
  const hashedPassword = bcrypt.hashSync(password, 10);

  connection.query(query, [name, email, hashedPassword, req.user.id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: 'User updated successfully' });
  });
};

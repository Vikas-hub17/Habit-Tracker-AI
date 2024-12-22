const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');

// Initialize the app
const app = express();

// Enable CORS middleware
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/habits', require('./routes/habitRoutes'));

// Test routes (optional, you can remove these once you're ready)
app.get('/api/habits', (req, res) => {
    // Your code to fetch habits
    res.json({ message: 'Habits data' });
});

app.get('/api/suggestions', (req, res) => {
    // Your code to fetch suggestions
    res.json({ message: 'Suggestions data' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

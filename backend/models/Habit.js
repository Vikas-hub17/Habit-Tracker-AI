const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  habit_title: { type: String, required: true },
  start_date: { type: Date, default: Date.now },
  frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], required: true },
  status: { type: String, enum: ['Active', 'Completed'], default: 'Active' },
});

module.exports = mongoose.model('Habit', HabitSchema);

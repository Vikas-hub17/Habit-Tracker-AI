const Habit = require('../models/Habit');

// Create a new habit
exports.createHabit = async (req, res) => {
  const { habit_title, frequency } = req.body;

  try {
    const habit = new Habit({
      user: req.user.id, // Assuming user authentication middleware adds `req.user`
      habit_title,
      frequency,
    });

    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

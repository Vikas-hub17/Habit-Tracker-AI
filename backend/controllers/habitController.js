const Habit = require('../models/Habit');

exports.createHabit = async (req, res) => {
  try {
    const habit = new Habit({ ...req.body, user: req.user.id });
    const savedHabit = await habit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user.id });
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const updatedHabit = await Habit.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedHabit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    await Habit.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.status(200).json({ message: 'Habit deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

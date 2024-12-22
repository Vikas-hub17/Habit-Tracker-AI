const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vikas:admin@cluster0.vdons.mongodb.net/habit_tracker?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const User = require('./models/User'); // Adjust path based on your structure
const Habit = require('./models/Habit'); // Adjust path based on your structure

const seedDatabase = async () => {
  await connectDB();

  // Check if user already exists
  let user = await User.findOne({ email: 'user@example.com' });

  if (!user) {
    // If user doesn't exist, create new user
    const hashedPassword = await bcrypt.hash('password123', 10);
    user = await User.create({
      name: 'User',
      email: 'user@example.com',
      password: hashedPassword,
    });
    console.log('User created');
  } else {
    console.log('User already exists');
  }

  // Create habits
  const habit1 = await Habit.create({
    user: user._id,
    habit_title: 'Drink Water',
    frequency: 'daily',
    status: 'Active',
  });

  const habit2 = await Habit.create({
    user: user._id,
    habit_title: 'Exercise',
    frequency: 'weekly',
    status: 'Active',
  });

  console.log('Habits created');
  console.log('Data seeded successfully');
  process.exit();
};

seedDatabase();

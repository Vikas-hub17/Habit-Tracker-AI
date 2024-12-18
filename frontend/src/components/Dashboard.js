import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios.get('/api/habits').then(res => setHabits(res.data));
  }, []);

  return (
    <div>
      <h2>Your Habits</h2>
      {habits.map(habit => (
        <div key={habit.habit_id}>{habit.habit_title}</div>
      ))}
    </div>
  );
};

export default Dashboard;

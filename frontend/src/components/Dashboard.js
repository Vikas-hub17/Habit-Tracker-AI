import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0f4f8;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const HabitList = styled.div`
  width: 80%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const HabitItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const HabitTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  background: ${(props) => props.bg || '#007bff'};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const AddHabitForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 800px;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const DoughnutContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin-top: 2rem;
`;

// Main Component
const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Fetch Habits and Suggestions
  useEffect(() => {
    axios.get('/api/habits').then((res) => setHabits(res.data));
    axios.get('/api/suggestions').then((res) => setSuggestions(res.data));
  }, []);

  // Add a New Habit
  const addHabit = (e) => {
    e.preventDefault();
    const habit = { habit_title: newHabit, status: 'Active', progress: 0 };
    setHabits([...habits, habit]);
    setNewHabit('');
  };

  // Mark Habit as Completed
  const markCompleted = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].status = 'Completed';
    updatedHabits[index].progress = 100;
    setHabits(updatedHabits);
  };

  // Delete Habit
  const deleteHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  // Chart Data
  const progressData = {
    labels: ['Completed', 'Active'],
    datasets: [
      {
        label: 'Progress',
        data: [
          habits.filter((h) => h.status === 'Completed').length,
          habits.filter((h) => h.status === 'Active').length,
        ],
        backgroundColor: ['#28a745', '#007bff'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Title>User Dashboard</Title>

      {/* Add Habit Form */}
      <AddHabitForm onSubmit={addHabit}>
        <Input
          type="text"
          placeholder="New Habit"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          required
        />
        <Button type="submit">Add Habit</Button>
      </AddHabitForm>

      {/* Suggestions */}
      <HabitList>
        <h3>Suggestions for New Habits:</h3>
        {suggestions.map((suggestion, index) => (
          <HabitItem key={index}>
            <HabitTitle>{suggestion.title}</HabitTitle>
          </HabitItem>
        ))}
      </HabitList>

      {/* Habit List */}
      <HabitList>
        <h3>Your Habits:</h3>
        {habits.map((habit, index) => (
          <HabitItem key={index}>
            <HabitTitle>
              {habit.habit_title} - {habit.progress}%
            </HabitTitle>
            <Buttons>
              {habit.status !== 'Completed' && (
                <Button bg="#28a745" onClick={() => markCompleted(index)}>
                  <FaCheckCircle />
                </Button>
              )}
              <Button bg="#dc3545" onClick={() => deleteHabit(index)}>
                <FaTrash />
              </Button>
            </Buttons>
          </HabitItem>
        ))}
      </HabitList>

      {/* Progress Chart */}
      <DoughnutContainer>
        <h3>Habit Progress</h3>
        <Doughnut data={progressData} />
      </DoughnutContainer>
    </Container>
  );
};

export default Dashboard;

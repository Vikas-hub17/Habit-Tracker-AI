import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  background-color: #f0f4f8;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const HabitList = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HabitItem = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HabitTitle = styled.span`
  font-size: 1.2rem;
  color: #007bff;
`;

const HabitStatus = styled.span`
  font-size: 1rem;
  color: ${(props) => (props.completed ? '#28a745' : '#ffc107')};
`;

const LoadingMessage = styled.p`
  font-size: 1rem;
  color: #777;
`;

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/habits')
      .then((res) => {
        setHabits(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Title>Your Habits</Title>
      {loading ? (
        <LoadingMessage>Loading habits...</LoadingMessage>
      ) : (
        <HabitList>
          {habits.length > 0 ? (
            habits.map((habit) => (
              <HabitItem key={habit.habit_id}>
                <HabitTitle>{habit.habit_title}</HabitTitle>
                <HabitStatus completed={habit.status === 'Completed'}>
                  {habit.status}
                </HabitStatus>
              </HabitItem>
            ))
          ) : (
            <LoadingMessage>No habits found. Add some habits to track!</LoadingMessage>
          )}
        </HabitList>
      )}
    </Container>
  );
};

export default Dashboard;

import React from 'react';
import styled from 'styled-components';

const HabitContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const HabitTitle = styled.h3`
  color: #007bff;
  margin: 0 0 0.5rem;
`;

const HabitStatus = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: ${(props) => (props.status === 'Completed' ? '#28a745' : '#ffc107')};
  color: #fff;
  border-radius: 4px;
`;

const HabitList = () => {
  const habits = [
    { id: 1, title: 'Drink Water', status: 'Active' },
    { id: 2, title: 'Morning Stretch', status: 'Completed' },
    { id: 3, title: 'Read a Book', status: 'Active' },
  ];

  return (
    <>
      {habits.map((habit) => (
        <HabitContainer key={habit.id}>
          <HabitTitle>{habit.title}</HabitTitle>
          <HabitStatus status={habit.status}>{habit.status}</HabitStatus>
        </HabitContainer>
      ))}
    </>
  );
};

export default HabitList;

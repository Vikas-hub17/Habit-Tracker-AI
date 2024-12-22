import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Login = () => {
  const navigate = useNavigate();

  // Hardcoded credentials
  const validEmail = 'user@example.com';
  const validPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === validEmail && password === validPassword) {
      // Simulate successful login by saving a token to localStorage
      localStorage.setItem('token', 'sample-jwt-token');
      navigate('/dashboard');
    } else {
      alert('Invalid email or password. Use: \nEmail: user@example.com\nPassword: password123');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;

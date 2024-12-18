import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const Error = styled.p`
  color: #ff0000;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('/api/auth/register', { name, email, password });
      navigate('/');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>
        {error && <Error>{error}</Error>}
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;

// src/pages/LoginPage.js

import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    if (username && password) {
      // Simulate successful login (You can add your authentication logic here)
      navigate('/home'); // Use navigate instead of history.push
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        sx={{ marginTop: 2 }}
      >
        Login
      </Button>
    </Container>
  );
};

export default LoginPage;

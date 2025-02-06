// src/pages/HomePage.js

import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Resume Builder
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Start building your professional resume with ease.
        </Typography>
        <Link to="/resume-form" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" fullWidth>
            Start Building Resume
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default HomePage;

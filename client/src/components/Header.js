// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Resume Builder
        </Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Home</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

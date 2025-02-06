// src/App.js

import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ResumeFormPage from './pages/ResumeFormPage';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  spacing: 8,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<LoginPage />} /> {/* Updated route structure */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/resume-form" element={<ResumeFormPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

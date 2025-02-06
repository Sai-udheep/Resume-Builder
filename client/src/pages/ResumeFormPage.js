// src/pages/ResumeFormPage.js

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

const ResumeFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    education: '',
    workExperience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // This will log the form data to the console
  };

  return (
    <div>
      <Header />
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Build Your Resume
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Full Name */}
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12}>
              <TextField
                label="Phone"
                type="tel"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>

            {/* Skills */}
            <Grid item xs={12}>
              <TextField
                label="Skills"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </Grid>

            {/* Education */}
            <Grid item xs={12}>
              <TextField
                label="Education (School, Degree, Year)"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </Grid>

            {/* Work Experience */}
            <Grid item xs={12}>
              <TextField
                label="Work Experience (Company, Role, Duration)"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Generate Resume
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default ResumeFormPage;

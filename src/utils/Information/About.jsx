import React from 'react';
import { Container, Typography, Grid, Avatar, Paper } from '@mui/material';
import Navsidebar from '../Navsidebar';

const About = () => {
  return (
    <div>
        <Navsidebar/>
    <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h3" gutterBottom align="center">About Us</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '2rem', textAlign: 'center' }}>
            <Avatar alt="Company Logo" src="/logo.png" style={{ width: '10rem', height: '10rem', marginBottom: '1rem' }} />
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              Write a brief description of your company's mission and values here.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '2rem', textAlign: 'center' }}>
            <Avatar alt="Team Photo" src="/team.jpg" style={{ width: '10rem', height: '10rem', marginBottom: '1rem' }} />
            <Typography variant="h5" gutterBottom>
              Our Team
            </Typography>
            <Typography variant="body1" paragraph>
              Introduce your team members and their roles, along with a brief description.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default About;

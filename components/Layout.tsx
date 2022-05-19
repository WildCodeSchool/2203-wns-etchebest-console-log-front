import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from '../components/NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CDEEDA',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Paper
        elevation={2}
        sx={{ width: '90%', height: '90%', borderRadius: '20px' }}
      >
        <NavBar />
        {children}
      </Paper>
    </Grid>
  );
};

export default Layout;

import React from 'react';
import { Alert, Container } from '@mui/material';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.menu}>
        <p>Gigs</p>
        <p>Reads</p>
        <p>Support</p>
        <p>Links</p>
      </div>
      <Alert severity="success" color="info">
        This is a success alert — check it out!
      </Alert>
    </Container>
  );
}

export default Home;

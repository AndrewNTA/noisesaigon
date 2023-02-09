import React from 'react';
import { Alert, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Bg from '../../static/images/bg_1.png';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <div className={classes.menu}>
        <p onClick={() => navigate('/')}>Home</p>
        <p onClick={() => navigate('/gigs')}>Gigs</p>
        <p>Reads</p>
        <p>Support</p>
        <p>Links</p>
      </div>
      <Alert severity="success" color="info">
        This is a success alert — check it out!
      </Alert>
      <img src={Bg} alt="bg" className={classes.bg} />
    </Container>
  );
}

export default Home;

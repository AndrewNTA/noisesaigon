import React from 'react';
import { Alert, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Bg from '../../static/images/bg_2.png';
import useStyles from './styles';

function Gigs() {
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
      <Alert severity="error">This is a error alert — check it out!</Alert>
      <img src={Bg} alt="bg" className={classes.bg} />
    </Container>
  );
}

export default Gigs;

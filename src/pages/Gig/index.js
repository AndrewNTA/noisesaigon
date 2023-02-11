import React from 'react';
import { Container } from '@mui/material';
import { Menu } from '../../components';
import Bg from '../../static/images/bg_2.png';
import useStyles from './styles';

function Gigs() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Menu />
      <img src={Bg} alt="bg" className={classes.bg} />
    </Container>
  );
}

export default Gigs;

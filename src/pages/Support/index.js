import React from 'react';
import { Container } from '@mui/material';
import { Menu, Footer, Spacing } from '../../components';
import useStyles from './styles';

function Support() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Menu />
      <Spacing size={48} />
      <div className={classes.main}>
        <div className={classes.pageName}>Support page</div>
        <div className={classes.pageDesc}>HELP KEEP GIGMUSIC RUNNING</div>
      </div>
      <Footer />
    </Container>
  );
}

export default Support;

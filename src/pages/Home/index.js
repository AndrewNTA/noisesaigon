import React from 'react';
import { Container, Grid } from '@mui/material';
import Bg from '../../static/images/bg_1.png';
import { InfoBox, Spacing, Article, Menu } from '../../components';
import { articles } from '../../mockDatas/article';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Menu />
      <img src={Bg} alt="bg" className={classes.bg} />
      <div className={classes.main}>
        <Spacing size={16} />
        <InfoBox
          title={'The GigMusic store is now open!'}
          content={
            'If you like what we do, you can support the site by making a donation or buying some merch through our new online store'
          }
        />
        <Spacing size={32} />
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <h1 className={classes.title}>LIVE MUSIC THIS WEEK</h1>
          </Grid>
          <Grid item xs={6} md={6}>
            <h1 className={classes.title}>LATEST READS</h1>
            {articles.map((a) => (
              <Article title={a.title} content={a.content} />
            ))}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Home;

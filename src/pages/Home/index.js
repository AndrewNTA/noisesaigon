import React from 'react';
import { Container, Grid } from '@mui/material';
import Bg from '../../static/images/bg_1.png';
import {
  InfoBox,
  Spacing,
  Article,
  Menu,
  Show,
  MoreButton,
} from '../../components';
import { articles } from '../../mockDatas/article';
import { shows } from '../../mockDatas/show';
import { months } from '../../constants';
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>LIVE MUSIC THIS WEEK</h1>
            <div className={classes.content}>
              {Object.keys(shows).map((keyDate) => {
                const dateShow = new Date(keyDate);
                const date = dateShow.getDate();
                const month = months[dateShow.getMonth()];
                const label = keyDate === '2023/02/13' ? 'Today' : 'Tomorrow';
                return (
                  <div key={keyDate}>
                    <div className={classes.showDate}>
                      <span className={classes.showLabel}>{label}</span>
                      {`${date} ${month}`}
                    </div>
                    {shows[keyDate].map((show) => (
                      <Show
                        key={show.name}
                        name={show.name}
                        time={show.time}
                        location={show.location}
                        artists={show.artists}
                      />
                    ))}
                  </div>
                );
              })}
              <MoreButton text="more gigs" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>LATEST READS</h1>
            <div className={classes.content}>
              {articles.map((a) => (
                <Article key={a.title} title={a.title} content={a.content} />
              ))}
              <MoreButton text="more reads" />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Home;

import React from 'react';
import { Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Bg from '../../static/images/bg_1.png';
import Discord from '../../static/images/discord-logo.svg';
import {
  InfoBox,
  Spacing,
  Article,
  Menu,
  Show,
  MoreButton,
  Footer,
  ScrollTopBtn
} from '../../components';
import { articles } from '../../mockDatas/article';
import { shows } from '../../mockDatas/show';
import { months } from '../../constants';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
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
              <MoreButton text="more gigs" onClick={() => navigate('/gigs')}/>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>LATEST READS</h1>
            <div className={classes.content}>
              {articles.map((a) => (
                <Article key={a.title} title={a.title} content={a.content} />
              ))}
              <MoreButton text="more reads" onClick={() => navigate('/reads')}/>
            </div>
          </Grid>
        </Grid>
        <Spacing size={64} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>WELCOME TO GIGMUSIC!</h1>
            <div className={classes.content}>
              <div className={classes.leftSpacing}>
                <b>
                  This site exists to promote the community that music creates,
                  with a local focus on Sydney, Australia.
                </b>
              </div>
              <Spacing size={24} />
              <div className={classes.leftSpacing}>
                At its heart is a simple, no-nonsense gig guide that does
                exactly what it says on the tin. We'll also be publishing the
                occasional bit of writing, including commentary on cultural
                trends, music reviews, opinion pieces, and round-ups from
                contributing writers. We also have a Discord, to help foster
                connections, again in the hope that it will make it easier to
                find Sydney's music community and find your place in it.
              </div>
              <MoreButton text="read more" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>JOIN OUR DISCORD!</h1>
            <div className={classes.content}>
              <div>
                <b>We have a Discord </b>
                (online chat server), so we can have a more dynamic and
                discussion-oriented place for Sydney's music community to meet.
                It's about as Web 2.0 as it gets around here.
              </div>
              <img
                src={Discord}
                alt="discord"
                className={classes.discordLogo}
              />
              <MoreButton text="join our discord!" />
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Home;

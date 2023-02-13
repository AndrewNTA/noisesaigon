import React from 'react';
import { Container, Grid } from '@mui/material';
import {
  Menu,
  Footer,
  Spacing,
  MoreButton,
  GigItem,
  ScrollTopBtn,
} from '../../components';
import Bg from '../../static/images/bg_3.png';
import { dayShows1, dayShows2 } from '../../mockDatas/show';
import useStyles from './styles';

function Gigs() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Menu />
      <img src={Bg} alt="bg" className={classes.bg} />
      <Spacing size={48} />
      <Grid container spacing={12} className={classes.main}>
        <Grid item xs={6} sm={8}>
          <div className={classes.title}>feb 2023</div>
          <Spacing size={32} />
          <GigItem day="Mon" date="13" gigs={dayShows1} />
          <Spacing size={32} />
          <GigItem day="Tue" date="14" gigs={dayShows2} />
          <Spacing size={32} />
          <GigItem day="Wed" date="15" gigs={dayShows1} />
          <Spacing size={32} />
          <GigItem day="Thu" date="16" gigs={dayShows2} />
          <Spacing size={32} />
          <GigItem day="Fri" date="17" gigs={dayShows1} />
          <Spacing size={32} />
          <GigItem day="Sat" date="18" gigs={dayShows2} />
          <Spacing size={32} />
          <GigItem day="Sun" date="19" gigs={dayShows1} />
        </Grid>
        <Grid item xs={6} sm={4} className={classes.section}>
          <div className={classes.title}>Gig guide playlist</div>
          <Spacing size={32} />
          <div>
            Listen to (almost) every artist listed in the gig guide this week:
          </div>
          <ul>
            <li>
              <a className={classes.link} href="#">
                Apple Music
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Spotify
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Tidal
              </a>
            </li>
          </ul>
          <div>Updated every Sunday!</div>
          <Spacing size={32} />
          <div className={classes.title}>about the guide</div>
          <Spacing size={32} />
          <div>
            This guide is as simple as we can practically get away with. We'll
            include some occasional commentary (feel free to submit your own!)
            to help give you context on what can be a dizzyingly complex network
            of musicians, collectives, communities, and spaces, or just make
            sure you don't miss out on catching your next favourite act.
          </div>
          <Spacing size={16} />
          <div>
            Got a gig you think should be listed here?{' '}
            <a className={classes.link} href="#">
              Drop us an email
            </a>
          </div>
          <Spacing size={32} />
          <MoreButton text="submit a gig" />
          <Spacing size={32} />
          <div>
            <b>Artists, managers, promoters, and venues:</b>
          </div>
          <Spacing size={16} />
          <div>
            Self-promo is fine —we love it when you let us know what you've got
            going on! But we won't publish your marketing/social copy verbatim
            or give you special consideration in the guide. We generally don't
            list cover/tribute bands or background-music sets at hospitality
            venues. All listings are at our own discretion. We will also
            graciously refuse any offer of door spots for shows where we can buy
            tickets.
          </div>
          <Spacing size={32} />
          <MoreButton text="join our discord!" />
          <MoreButton text="other links" />
        </Grid>
      </Grid>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Gigs;

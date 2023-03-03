import React from "react";
import { Container, Grid } from "@mui/material";
import {
  Menu,
  Footer,
  Spacing,
  GigItem,
  ScrollTopBtn,
  SpotifyIframe,
} from "components";
import Bg from "static/images/bg_3.png";
import { dayShows1, dayShows2 } from "../../mockDatas/show";
import useStyles from "./styles";

function Gigs() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Menu />
      <img src={Bg} alt="bg" className={classes.bg} />
      <Spacing size={48} />
      <Grid
        container
        columnSpacing={{ xs: 2, sm: 2, md: 12 }}
        className={classes.main}
      >
        <Grid item xs={12} sm={8}>
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
        <Grid item xs={12} sm={4} className={classes.section}>
          <div className={classes.title}>NOISE SAIGON PLAYLIST</div>
          <Spacing size={32} />
          <SpotifyIframe />
          <Spacing size={32} />
          <div className={classes.title}>ABOUT THE GUIDE</div>
          <Spacing size={32} />
          <div>
            The aim is to keep this guide as simple as possible. If you have an
            event you think should be listed here, hit the submit button below.
          </div>
          <Spacing size={16} />
        </Grid>
      </Grid>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Gigs;

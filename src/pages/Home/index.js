import React from "react";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Bg from "static/images/bg_1.png";
import {
  Spacing,
  Article,
  Menu,
  Show,
  MoreButton,
  Footer,
  ScrollTopBtn,
  SpotifyIframe,
} from "components";

import { articles } from "../../mockDatas/article";
import { shows } from "../../mockDatas/show";
import { months } from "../../constants";
import useStyles from "./styles";

const ARTICLES_QUERY = gql`
  {
    articles {
      createdAt
      id
      name
      publishedAt
      updatedAt
    }
  }
`;

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  // const { data, loading } = useQuery(ARTICLES_QUERY);

  return (
    <Container maxWidth="lg">
      <Menu />
      <img src={Bg} alt="bg" className={classes.bg} />
      <div className={classes.main}>
        <Spacing size={32} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>LIVE MUSIC THIS WEEK</h1>
            <div className={classes.content}>
              {Object.keys(shows).map((keyDate) => {
                const dateShow = new Date(keyDate);
                const date = dateShow.getDate();
                const month = months[dateShow.getMonth()];
                const label = keyDate === "2023/02/13" ? "Today" : "Tomorrow";
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
              <MoreButton text="more gigs" onClick={() => navigate("/gigs")} />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>LATEST READS</h1>
            <div className={classes.content}>
              {articles.map((a) => (
                <Article key={a.title} title={a.title} content={a.content} />
              ))}
              <MoreButton
                text="more reads"
                onClick={() => navigate("/reads")}
              />
            </div>
          </Grid>
        </Grid>
        <Spacing size={64} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>WELCOME TO NOISE SAIGON!</h1>
            <div className={classes.content}>
              <div className={classes.leftSpacing}>
                <b>
                  This site exists to promote the community that music creates
                  in Saigon, Vietnam.
                </b>
              </div>
              <Spacing size={24} />
              <div className={classes.leftSpacing}>
                At its heart is a simple, no-nonsense gig guide that does
                exactly what it says on the tin. We'll also try to publish a bit
                of writing, gig reviews, music reviews and opinion pieces and
                the like. If you have an event that you would like to promote,
                or an article you want published, send us an email!
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>NOISE SAIGON PLAYLIST</h1>
            <SpotifyIframe />
          </Grid>
        </Grid>
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Home;

import React, { useCallback, useMemo, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import {
  Spacing,
  Article,
  Menu,
  Event,
  MoreButton,
  Footer,
  ScrollTopBtn,
  SpotifyIframe,
  SkeletonLoading,
  MetaTags
} from "components";
import { months } from "constants/index";
import { genEndDate, genStartDate, groupEventsByDate } from "utils";
import ImageGallery from "react-image-gallery";
import useStyles from "./styles";

const genImages = (arr) => {
  if (!arr || arr.length === 0) return null;
  return arr.map((a) => ({
    original: a?.image?.url,
    thumbnail: a?.image?.url,
  }));
};

const BANNERS_QUERY = gql`
  query Banners {
    banners(first: 5) {
      id
      image {
        url(
          transformation: {
            image: { resize: { fit: clip, height: 2048, width: 682 } }
          }
        )
      }
    }
  }
`;

const ARTICLES_QUERY = gql`
  query Articles {
    articles(first: 5, orderBy: publishedAt_DESC) {
      brief
      id
      name
    }
  }
`;

const EVENTS_QUERY = gql`
  query Events($start: DateTime, $end: DateTime) {
    events(
      first: 5
      where: { time_gte: $start, time_lte: $end }
      orderBy: time_ASC
    ) {
      id
      extraInfo
      eventName
      price
      optionalInfo
      venueLink
      venueName
      time
      facebookLink
    }
  }
`;

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { data: bannerData } = useQuery(BANNERS_QUERY);
  const { data: articleData, loading: articleLoading } =
    useQuery(ARTICLES_QUERY);
  const startOfDate = useMemo(genStartDate, []);
  const endOfDate = useMemo(genEndDate, []);
  const { data: eventData, loading: eventLoading } = useQuery(EVENTS_QUERY, {
    variables: {
      start: startOfDate,
      end: endOfDate,
    },
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const groupedEvents = groupEventsByDate(eventData?.events);
  const articleList = articleData?.articles ?? null;
  const keys = groupedEvents ? Object.keys(groupedEvents) : [];
  const getCurrentDate = useCallback(() => {
    const now = new Date();
    return now.getDate();
  }, []);

  const currentDate = useMemo(getCurrentDate, [getCurrentDate]);
  const bannerList = useMemo(
    () => genImages(bannerData && bannerData.banners),
    [bannerData]
  );

  return (
    <Container maxWidth="lg">
      <MetaTags />
      <Menu />
      {bannerList && (
        <ImageGallery
          items={bannerList}
          showThumbnails={false}
          autoPlay={true}
          slideDuration={1500}
          slideInterval={8000}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      )}
      <div className={classes.main}>
        <Spacing size={32} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>LIVE MUSIC THIS WEEK</h1>
            {eventLoading && <SkeletonLoading length={4} />}
            <div className={classes.content}>
              {keys.map((k) => {
                const eventList = groupedEvents[k] ?? null;
                const date = parseInt(k);
                const label =
                  date === currentDate
                    ? "today"
                    : date === currentDate + 1
                    ? "tomorrow"
                    : "";
                const month = months[new Date().getMonth()];
                return (
                  <div key={`${date}-${month}`}>
                    <div className={classes.eventDate}>
                      <span className={classes.eventLabel}>{label}</span>
                      {`${date} ${month}`}
                    </div>
                    {eventList &&
                      eventList.map((ev) => (
                        <Event
                          key={ev.id}
                          eventName={ev.eventName}
                          time={ev.time}
                          venueLink={ev.venueLink}
                          venueName={ev.venueName}
                          facebookLink={ev.facebookLink}
                          optionalInfo={ev.optionalInfo}
                          extraInfo={ev.extraInfo}
                          price={ev.price}
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
            <Spacing size={16} />
            {articleLoading && <SkeletonLoading length={4} />}
            {!articleLoading && articleList && (
              <div className={classes.content}>
                {articleList.map((a) => (
                  <Article
                    key={a.id}
                    id={a.id}
                    title={a.name}
                    content={a.brief}
                  />
                ))}
                <MoreButton
                  text="more reads"
                  onClick={() => navigate("/reads")}
                />
              </div>
            )}
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

import React, { useMemo, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import {
  Menu,
  Footer,
  Spacing,
  GigItem,
  ScrollTopBtn,
  SpotifyIframe,
  SkeletonLoading,
  MetaTags,
} from "components";
import Bg from "static/images/bg_3.png";
import {
  genEndDateOfYear,
  genStartDate,
  groupEventsByDate,
  groupEventsByMonth,
} from "utils";
import useStyles from "./styles";

const EVENTS_QUERY = gql`
  query Events($start: DateTime, $end: DateTime) {
    events(first: 100, orderBy: time_ASC, where: { time_gte: $start, time_lte: $end }) {
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

function Gigs() {
  const classes = useStyles();
  const startOfDate = useMemo(genStartDate, []);
  const endOfDate = useMemo(genEndDateOfYear, []);
  const { data, loading } = useQuery(EVENTS_QUERY, {
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

  const groupedEventsByMonth = groupEventsByMonth(data?.events);
  const monthKeys = groupedEventsByMonth
    ? Object.keys(groupedEventsByMonth)
    : [];

  return (
    <Container maxWidth="lg">
      <MetaTags />
      <Menu />
      <img src={Bg} alt="bg" className={classes.bg} />
      <Spacing size={48} />
      <Grid
        container
        columnSpacing={{ xs: 2, sm: 2, md: 12 }}
        className={classes.main}
      >
        <Grid item xs={12} sm={8}>
          {loading && <SkeletonLoading length={4} />}
          {!loading &&
            groupedEventsByMonth &&
            monthKeys.map((time) => {
              const groupedEvents = groupEventsByDate(groupedEventsByMonth[time]);
              const keys = groupedEvents ? Object.keys(groupedEvents) : [];
              return (
                <div key={time}>
                  <div className={classes.title}>{time}</div>
                  <Spacing size={32} />
                  {groupedEvents &&
                    keys.map((date) => {
                      const eventList = groupedEvents[date] ?? null;
                      const day = eventList ? eventList[0]?.day : "";
                      return (
                        eventList && (
                          <div key={`${date}-${day}`}>
                            <GigItem day={day} date={date} events={eventList} />
                            <Spacing size={32} />
                          </div>
                        )
                      );
                    })}
                </div>
              );
            })}
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
          <a
            href="mailto:noisesaigon@gmail.com"
            className={classes.sendEmailBtn}
          >
            Send an Email
          </a>
          <Spacing size={16} />
        </Grid>
      </Grid>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Gigs;

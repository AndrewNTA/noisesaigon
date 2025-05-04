'use client';

import React, { useMemo, useEffect, useState } from 'react';
import { Container, Grid, styled } from '@mui/material';
import { useLazyQuery, gql } from '@apollo/client';
import {
  Menu,
  Footer,
  Spacing,
  GigItem,
  ScrollTopBtn,
  SpotifyIframe,
  SkeletonLoading,
  Banner,
} from '@/components';
import {
  genOneYearQuery,
  genStartDate,
  groupEventsByDate,
  groupEventsByMonth,
} from '@/utils';

const MainGrid = styled(Grid)(({ theme }) => ({
  padding: '0 1.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  },
}));

const SectionGrid = styled(Grid)(({ theme }) => ({
  fontSize: '0.875rem',
  lineHeight: '1.125rem',
  color: '#374151',
}));

const Title = styled('div')({
  fontSize: '1.375rem',
  lineHeight: '1.75rem',
  textTransform: 'uppercase',
  borderBottom: '1px solid #000',
  padding: '0 0.75rem 0.175rem 0.75rem',
  fontWeight: 500,
  color: '#000',
});

const EmailButton = styled('a')(({ theme }) => ({
  padding: '8px 12px',
  borderRadius: '4px',
  border: '2px solid #000',
  cursor: 'pointer',
  marginTop: '20px',
  fontSize: '1.125rem',
  lineHeight: '1.25rem',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  color: '#000',
  textDecorationLine: 'none',
  '&:hover': {
    border: '2px solid #E02020',
    color: '#E02020',
  },
}));

const EVENTS_QUERY = gql`
  query Events($start: DateTime, $end: DateTime) {
    events(
      first: 100
      orderBy: time_ASC
      where: { time_gte: $start, time_lte: $end }
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

function Gigs() {
  const [events, setEvents] = useState([]);
  const startOfDate = useMemo(genStartDate, []);
  const endOfDate = useMemo(genOneYearQuery, []);
  const [getEvents, { data, loading }] = useLazyQuery(EVENTS_QUERY);

  useEffect(() => {
    getEvents({
      variables: {
        start: startOfDate,
        end: endOfDate,
      },
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data?.events.length) {
      const newEvents = [...events, ...data.events];
      setEvents(newEvents);
    }
    if (data?.events.length === 100) {
      const lastItem = data.events[99];
      getEvents({
        variables: {
          start: lastItem.time,
          end: endOfDate,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.events]);

  const groupedEventsByMonth = groupEventsByMonth(events);
  const monthKeys = groupedEventsByMonth
    ? Object.keys(groupedEventsByMonth)
    : [];

  const isLoading = loading && !events.length;

  return (
    <Container maxWidth="lg">
      <Menu />
      <Banner />
      <Spacing size={48} />
      <MainGrid container columnSpacing={{ xs: 2, sm: 2, md: 12 }}>
        <Grid item xs={12} sm={8}>
          {isLoading && <SkeletonLoading length={4} />}
          {!isLoading &&
            groupedEventsByMonth &&
            monthKeys.map((time) => {
              const groupedEvents = groupEventsByDate(
                groupedEventsByMonth[time]
              );
              const keys = groupedEvents ? Object.keys(groupedEvents) : [];
              return (
                <div key={time}>
                  <Title>{time}</Title>
                  <Spacing size={32} />
                  {groupedEvents &&
                    keys.map((k) => {
                      const [, date] = k.split('-');
                      const eventList = groupedEvents[k] ?? null;
                      const day = eventList ? eventList[0]?.day : '';
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
        <SectionGrid item xs={12} sm={4}>
          <Title>NOISE SAIGON PLAYLIST</Title>
          <Spacing size={32} />
          <SpotifyIframe />
          <Spacing size={32} />
          <Title>ABOUT THE GUIDE</Title>
          <Spacing size={32} />
          <div>
            The aim is to keep this guide as simple as possible. If you have an
            event you think should be listed here, hit the submit button below.
          </div>
          <EmailButton href="mailto:noisesaigon@gmail.com">
            Send an Email
          </EmailButton>
          <Spacing size={16} />
        </SectionGrid>
      </MainGrid>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Gigs;

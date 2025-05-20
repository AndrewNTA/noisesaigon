'use client'

import React, { useCallback, useMemo, useEffect } from 'react';
import { Container, Grid, styled } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery, gql } from '@apollo/client';
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
} from '@/components';
import { months } from '@/constants';
import { genEndDate, genStartDate, groupEventsByDate } from '@/utils';
import BannerSrc from './static/images/banner-home.jpg';

const HomeMain = styled('div')(({ theme }) => ({
  padding: '1.25rem',
  [theme.breakpoints.down('sm')]: {
    padding: '1.25rem 0',
  },
}));

const HomeTitle = styled('h1')({
  padding: '0 0.75rem 0.5rem 0.5rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  lineHeight: '1.25rem',
  borderBottom: '1px solid black',
  fontSize: '1.375rem',
});

const HomeEventDate = styled('div')({
  textTransform: 'uppercase',
  lineHeight: '1.25rem',
  borderBottom: '1px solid black',
  fontSize: '1.125rem',
  color: '#6D7278',
  paddingBottom: '4px',
  fontWeight: 400,
  marginTop: '2.5rem',
  marginBottom: '1rem',
});

const HomeEventLabel = styled('span')({
  color: '#E02020',
  textTransform: 'uppercase',
  lineHeight: '1.25rem',
  fontSize: '1.125rem',
  fontWeight: 700,
  marginRight: '6px',
});

const HomeEventContent = styled('div')(({ theme }) => ({
  paddingRight: '8rem',
  [theme.breakpoints.down('sm')]: {
    paddingRight: '0',
  },
}));

const HomeLeftSpacing = styled('div')({
  paddingLeft: '16px',
});

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
  const router = useRouter();
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
      behavior: 'smooth',
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

  return (
    <Container maxWidth="lg">
      <Menu />
      <Image src={BannerSrc} alt="banner" width={970} height={600} style={{ width: '100%', height: 'auto' }} />
      <HomeMain>
        <Spacing size={32} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <HomeTitle>LIVE MUSIC THIS WEEK</HomeTitle>
            {eventLoading && <SkeletonLoading length={4} />}
            <HomeEventContent>
              {keys.map((k) => {
                const eventList = groupedEvents[k] ?? null;
                const [month, date] = k.split('-');
                const label =
                  parseInt(date) === currentDate
                    ? 'today'
                    : parseInt(date) === currentDate + 1
                    ? 'tomorrow'
                    : '';
                return (
                  <div key={k}>
                    <HomeEventDate>
                      <HomeEventLabel>{label}</HomeEventLabel>
                      {`${date} ${months[month]}`}
                    </HomeEventDate>
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
              <MoreButton
                text="more gigs"
                onClick={() => router.push('/gigs')}
              />
            </HomeEventContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeTitle>LATEST READS</HomeTitle>
            <Spacing size={16} />
            {articleLoading && <SkeletonLoading length={4} />}
            {!articleLoading && articleList && (
              <HomeEventContent>
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
                  onClick={() => router.push('/reads')}
                />
              </HomeEventContent>
            )}
          </Grid>
        </Grid>
        <Spacing size={64} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <HomeTitle>WELCOME TO NOISE SAIGON!</HomeTitle>
            <HomeEventContent>
              <HomeLeftSpacing>
                <b>
                  This site exists to promote the community that music creates
                  in Saigon, Vietnam.
                </b>
              </HomeLeftSpacing>
              <Spacing size={24} />
              <HomeLeftSpacing>
                At its heart is a simple, no-nonsense gig guide that does
                exactly what it says on the tin. We&apos;ll also try to publish a bit
                of writing, gig reviews, music reviews and opinion pieces and
                the like. If you have an event that you would like to promote,
                or an article you want published, send us an email!
              </HomeLeftSpacing>
            </HomeEventContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeTitle>NOISE SAIGON PLAYLIST</HomeTitle>
            <SpotifyIframe />
          </Grid>
        </Grid>
      </HomeMain>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Home;

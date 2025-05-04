'use client';

import React, { useEffect } from 'react';
import { Container, styled } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import {
  Menu,
  Footer,
  Spacing,
  ScrollTopBtn,
  SkeletonLoading,
  Article,
  Banner,
} from '@/components';

const ReadMain = styled('div')(({ theme }) => ({
  paddingRight: '6rem',
  [theme.breakpoints.down('sm')]: {
    paddingRight: 0,
  },
}));

const ReadSection = styled('div')({
  fontSize: '1.375rem',
  lineHeight: '1.75rem',
  textTransform: 'uppercase',
  borderBottom: '1px solid #000',
  padding: '0 0.75rem 0.175rem 0.75rem',
  fontWeight: 600,
  color: '#000',
});

const ARTICLES_QUERY = gql`
  query Articles {
    articles(first: 100, orderBy: publishedAt_DESC) {
      brief
      id
      name
    }
  }
`;

function Read() {
  const { data, loading } = useQuery(ARTICLES_QUERY);

  const readList = data && data.articles;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Menu />
      <Banner />
      <Spacing size={48} />
      <ReadMain>
        <ReadSection>LATEST READS</ReadSection>
        <Spacing size={32} />
        {loading && <SkeletonLoading length={4} />}
        {!loading &&
          readList &&
          readList.map((a) => (
            <Article key={a.id} id={a.id} content={a.brief} title={a.name} />
          ))}
      </ReadMain>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Read;

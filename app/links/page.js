'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Container, styled } from '@mui/material';
import { useLazyQuery, gql } from '@apollo/client';
import {
  Menu,
  Footer,
  Spacing,
  ScrollTopBtn,
  SkeletonLoading,
  Banner,
} from '@/components';
import { groupLinks, mapLinkGroupDisplay } from '@/utils';

const LinkSection = styled('div')({
  fontSize: '1.375rem',
  lineHeight: '1.75rem',
  textTransform: 'uppercase',
  borderBottom: '1px solid #000',
  padding: '0 0.75rem 0.175rem 0.75rem',
  fontWeight: 600,
  color: '#000',
});

const LinkTitle = styled('div')({
  lineHeight: '1.25rem',
  fontStyle: 'italic',
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '1.125rem',
  paddingLeft: '0.75rem',
  borderLeft: '2px solid #E02020',
  marginBottom: '2rem',
});

const LinkItem = styled('a')({
  lineHeight: '1.75rem',
  fontSize: '0.875rem',
  paddingLeft: '0.75rem',
  fontWeight: 600,
  cursor: 'pointer',
  color: '#000',
  textDecorationLine: 'none',
  '&:hover': {
    color: '#E02020',
  },
});

const LinkText = styled('div')(({ theme }) => ({
  lineHeight: '1.125rem',
  fontSize: '0.875rem',
  paddingLeft: '0.75rem',
  paddingRight: '4rem',
  marginBottom: '0.5rem',
  textAlign: 'justify',
  [theme.breakpoints.down('sm')]: {
    paddingRight: 0,
  },
}));

const LINKS_QUERY = gql`
  query Links($skipIdx: Int) {
    links(first: 100, skip: $skipIdx) {
      id
      name
      description
      type
      url
    }
  }
`;

function Link() {
  const total = useRef(100);
  const [links, setLinks] = useState([]);
  const [getLinks, { data, loading }] = useLazyQuery(LINKS_QUERY);

  useEffect(() => {
    getLinks({
      variables: {
        skipIdx: 0,
      },
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data?.links.length) {
      const newLinks = [...links, ...data.links];
      setLinks(newLinks);
    }
    if (data?.links.length === 100) {
      getLinks({
        variables: {
          skipIdx: total.current,
        },
      });
      total.current = total.current + 100;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.links]);

  const groupedLinks = groupLinks(links);
  const groupKeys = groupedLinks && Object.keys(groupedLinks);

  return (
    <Container maxWidth="lg">
      <Menu />
      <Banner />
      <Spacing size={24} />
      <div className="google-map-code">
        <iframe
          src="https://maper.app/map-details/HfaEikSjTtW7ETZ27vXB?go=true"
          width="100%"
          height="400"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="map"
        ></iframe>
      </div>
      <Spacing size={48} />
      <div>
        <LinkSection>A BUNCH OF LINKS</LinkSection>
        <Spacing size={32} />
        {loading && <SkeletonLoading length={4} />}
        {!loading &&
          groupedLinks &&
          groupKeys.map((key) => (
            <div key={key}>
              <LinkTitle>{mapLinkGroupDisplay(key)}</LinkTitle>
              {groupedLinks[key].map((link) => (
                <div key={link.id}>
                  <LinkItem href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                  </LinkItem>
                  <LinkText>{link.description}</LinkText>
                </div>
              ))}
              <Spacing size={32} />
            </div>
          ))}
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Link;

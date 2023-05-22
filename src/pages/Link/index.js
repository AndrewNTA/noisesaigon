import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import {
  Menu,
  Footer,
  Spacing,
  ScrollTopBtn,
  SkeletonLoading,
  MetaTags,
} from 'components';
import Banner from 'static/images/banner.png';
import { groupLinks, mapLinkGroupDisplay } from 'utils';
import useStyles from './styles';

const LINKS_QUERY = gql`
  query Links {
    links(first: 100) {
      id
      name
      description
      type
      url
    }
  }
`;

function Link() {
  const classes = useStyles();
  const { data, loading } = useQuery(LINKS_QUERY);
  const groupedLinks = groupLinks(data?.links);

  const groupKeys = groupedLinks && Object.keys(groupedLinks);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <MetaTags />
      <Menu />
      <img src={Banner} alt="bg" className={classes.bg} />
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
          title='map'
        ></iframe>
      </div>
      <Spacing size={48} />
      <div>
        <div className={classes.section}>A BUNCH OF LINKS</div>
        <Spacing size={32} />
        {loading && <SkeletonLoading length={4} />}
        {!loading &&
          groupedLinks &&
          groupKeys.map((key) => (
            <div key={key}>
              <div className={classes.title}>{mapLinkGroupDisplay(key)}</div>
              {groupedLinks[key].map((link) => (
                <div key={link.id}>
                  <a
                    className={classes.link}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                  <div className={classes.text}>{link.description}</div>
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

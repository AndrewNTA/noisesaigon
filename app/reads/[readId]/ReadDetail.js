'use client';

import React, { useEffect, useMemo } from 'react';
import { Container, Grid, Skeleton, Typography, styled } from '@mui/material';
import { useQuery } from '@apollo/client';
import ImageGallery from 'react-image-gallery';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Menu,
  Footer,
  Spacing,
  ScrollTopBtn,
  SkeletonReadLoading,
} from '@/components';
import { formatDisplayFullDate } from '@/utils';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ARTICLE_QUERY } from './queries';

const DetailsMain = styled('div')({
  padding: '0.25rem 0',
});

const DetailsName = styled('div')(({ theme }) => ({
  fontSize: '1.375rem',
  lineHeight: '1.75rem',
  textTransform: 'uppercase',
  padding: '0 0.75rem 0.175rem 0.75rem',
  fontWeight: 600,
  color: '#000',
  marginBottom: '2rem',
  fontStyle: 'italic',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
  },
}));

const DetailsText = styled('div')(({ theme }) => ({
  lineHeight: '1.8rem',
  fontSize: '1.25rem',
  marginBottom: '0.75rem',
  margin: '1.2rem 0',
  color: '#374151',
  fontFamily: 'IBM Plex Sans Condensed,sans-serif',
  '& a': {
    color: '#111',
    fontWeight: 500,
  },
  '& img': {
    maxWidth: '100% !important',
    height: 'auto',
  },
  '& h1': {
    lineHeight: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },
}));

const DetailsArticleLabel = styled('div')({
  lineHeight: '1.125rem',
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  color: '#E02020',
});

const DetailsArticleValue = styled('div')({
  lineHeight: '1.75rem',
  fontSize: '1.125rem',
  fontStyle: 'italic',
  textTransform: 'uppercase',
});

const genImages = (arr) => {
  if (!arr || arr.length === 0) return null;
  return arr.map((g) => ({
    original: g.url,
    thumbnail: g.url,
  }));
};

function ReadDetail({ readId }) {
  const router = useRouter();
  const { data, loading } = useQuery(ARTICLE_QUERY, {
    variables: {
      id: readId,
    },
  });
  const articleData = data?.article ?? null;
  const imageList = useMemo(
    () => genImages(articleData && articleData.gallery),
    [articleData]
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  if (!loading && !articleData) {
    router.push('/not-found');
  }
  return (
    <Container maxWidth="lg">
      <Menu />
      <Spacing size={48} />
      <DetailsMain>
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            {loading && <SkeletonReadLoading length={4} />}
            {!loading && articleData && (
              <>
                <DetailsName>{articleData.name}</DetailsName>
                {articleData?.photo?.url && (
                  <Image
                    src={articleData?.photo?.url}
                    alt={articleData.name}
                    width={200}
                    height={200}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                )}
                <Spacing size={32} />
                <DetailsText
                  dangerouslySetInnerHTML={{
                    __html: articleData?.content?.html ?? '',
                  }}
                />
              </>
            )}
            <Spacing size={32} />
            {imageList && <ImageGallery items={imageList} />}
          </Grid>
          <Grid item xs={12} md={3}>
            {loading && (
              <>
                <Spacing size={12} />
                <Typography component="div" key="h5" variant="h5">
                  <Skeleton width="50%" animation="false" />
                </Typography>
                <Spacing size={12} />
                <Skeleton width="80%" animation="wave" />
                <Spacing size={32} />
                <Typography component="div" key="h5" variant="h5">
                  <Skeleton width="50%" animation="false" />
                </Typography>
                <Spacing size={12} />
                <Skeleton width="80%" animation="wave" />
              </>
            )}
            {!loading && articleData && (
              <>
                <DetailsArticleLabel>By</DetailsArticleLabel>
                <DetailsArticleValue>{articleData?.author}</DetailsArticleValue>
                <Spacing size={32} />
                <DetailsArticleLabel>Published</DetailsArticleLabel>
                <DetailsArticleValue>
                  {formatDisplayFullDate(articleData?.publishedAt)}
                </DetailsArticleValue>
              </>
            )}
          </Grid>
        </Grid>
      </DetailsMain>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default ReadDetail;

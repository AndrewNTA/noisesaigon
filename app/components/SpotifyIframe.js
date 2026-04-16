'use client';
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Skeleton } from '@mui/material';

const SPOTIFY_URL_QUERY = gql`
  query Spotify($id: ID) {
    spotifyLink(where: { id: $id }) {
      spotifyUrl
    }
  }
`;

const DEFAULT_ID = 'cmo20dzmg4axp0814nw9uuzsi';
const DEFAULT_URL =
  'https://open.spotify.com/embed/playlist/4TcjjsoKKkotkxbDCUxqgf?si=35AtBQWOQduTSy-3FTjg1Q';

function SpotifyIframe() {
  const { data, loading } = useQuery(SPOTIFY_URL_QUERY, {
    variables: { id: DEFAULT_ID },
  });

  const url = data?.spotifyLink?.spotifyUrl || DEFAULT_URL;
  const fullUrl = `${url}&pi=faGSWphuTDOiO?utm_source=generator&theme=0`;

  if (loading) {
    return (
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={100}
      />
    );
  }
  return (
    <div>
      <iframe
        title="play-list"
        style={{ borderRadius: '12px' }}
        src={fullUrl}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default SpotifyIframe;

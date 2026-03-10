'use client';

import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { useQuery, gql } from '@apollo/client';
import { Skeleton } from '@mui/material';

const ImageBanner = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  cursor: 'pointer',
});

const BANNER_QUERY = gql`
  query Banner($pageId: TypeOfBanner) {
    banner(where: { bannerPage: $pageId }) {
      id
      bannerLink
      bannerImg {
        url
      }
    }
  }
`;

export default function Banner({ isHomepage, pageType }) {
  const { data, loading } = useQuery(BANNER_QUERY, {
    variables: { pageId: pageType },
  });
  const defaultUrl = isHomepage
    ? '/images/banner-home.jpg'
    : '/images/banner.png';

  const bannerUrl = data?.banner ? data.banner.bannerImg.url : defaultUrl;

  const handleClick = () => {
    const bannerLink = data?.banner?.bannerLink;
    if (!bannerLink) return;
    window.open(bannerLink, '_blank');
  };

  if (loading) {
    return (
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={200}
      />
    );
  }

  return (
    <ImageBanner
      src={bannerUrl}
      alt="banner"
      width={970}
      height={600}
      onClick={handleClick}
    />
  );
}

import Image from 'next/image';
import { styled } from '@mui/material/styles';
import BannerSrc from '../static/images/banner.png';

const ImageBanner = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default function Banner() {
  return <ImageBanner src={BannerSrc} alt="bg" />;
}

import Image from 'next/image';
import { styled } from '@mui/material/styles';

const ImageBanner = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default function Banner() {
  return <ImageBanner src="/images/banner.png" alt="bg" width={970} height={600} />;
}

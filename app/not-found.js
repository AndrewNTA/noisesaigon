'use client';

import { styled } from '@mui/material';
import Image from 'next/image';
import NotFoundImage from './static/images/not-found.png';
import { useRouter } from 'next/navigation';
const Container = styled('div')(() => ({
  width: '100%',
  height: '100vh',
  textAlign: 'center',
  boxSizing: 'border-box',
  paddingTop: '10vh',
}));

const NotFoundImg = styled(Image)(({ theme }) => ({
  width: '600px',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '320px',
  },
}));

const NotFoundText = styled('div')(({ theme }) => ({
  margin: '40px 0',
  fontWeight: 700,
  fontSize: '2.5em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5em',
  },
}));

const NotFoundBtn = styled('div')(() => ({
  backgroundColor: '#E02020',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'inline-block',
  borderRadius: '4px',
  padding: '10px 32px',
}));

export default function NotFound() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <Container>
      <NotFoundImg
        src={NotFoundImage}
        alt="Not Found"
        width={600}
        height={400}
      />
      <NotFoundText>Oops! Page not found</NotFoundText>
      <NotFoundBtn onClick={goHome}>Back to Home page</NotFoundBtn>
    </Container>
  );
}

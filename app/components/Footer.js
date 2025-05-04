import React from 'react';
import { Grid, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import Spacing from './Spacing';

const FooterWrapper = styled('div')({
  color: '#E5E7EB',
  backgroundColor: '#000000',
  padding: '3.5rem 2.5rem',
  marginTop: '4rem',
  fontSize: '0.875rem',
});

const FooterLogo = styled('div')({
  cursor: 'pointer',
  fontSize: '2.5rem',
  lineHeight: '1.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
});

const FooterLink = styled('a')({
  color: 'white',
  fontWeight: 500,
  marginLeft: '3px',
  '&:hover': {
    textDecorationLine: 'underline',
  },
});

const FooterTitle = styled('div')({
  fontSize: '1.5rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  marginBottom: '2rem',
});

const FooterItem = styled('div')({
  color: 'white',
  fontWeight: 400,
  marginBottom: '12px',
  cursor: 'pointer',
});

function Footer() {
  const router = useRouter();

  return (
    <FooterWrapper>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <FooterLogo onClick={() => router.push('/')}>Noisesaigon</FooterLogo>
          <Spacing size={32} />
          <div>
            Email: <b>noisesaigon@gmail.com</b>
          </div>
          <Spacing size={8} />
          <div>
            Instagram:{' '}
            <FooterLink
              href={'https://www.instagram.com/noisesaigon/'}
              target="_blank"
              rel="noreferrer"
            >
              @noisesaigon
            </FooterLink>
          </div>
          <Spacing size={8} />
          <div>
            Facebook:{' '}
            <FooterLink
              href={'https://www.facebook.com/noisesaigon/'}
              target="_blank"
              rel="noreferrer"
            >
              Noise Saigon
            </FooterLink>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <FooterTitle>Navigation</FooterTitle>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <FooterItem onClick={() => router.push('/')}>Home</FooterItem>
              <FooterItem onClick={() => router.push('/gigs')}>Gigs</FooterItem>
            </Grid>
            <Grid item xs={6} md={6}>
              <FooterItem onClick={() => router.push('/reads')}>
                Reads
              </FooterItem>
              <FooterItem onClick={() => router.push('/links')}>
                Links
              </FooterItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FooterWrapper>
  );
}

export default Footer;

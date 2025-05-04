import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { styled } from '@mui/material';
import Logo from '../static/images/logo.png';

const MenuWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '12px',
  paddingTop: '4rem',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    paddingTop: '12px',
  },
}));

const MenuLogoWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

const MenuLogo = styled(Image)(({ theme }) => ({
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  paddingRight: '5rem',
  paddingLeft: '5rem',
  [theme.breakpoints.down('sm')]: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: '1rem',
  },
}));

const MenuItemGroup = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,
});

const MenuItem = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1.375rem',
  textTransform: 'uppercase',
  padding: '4px 2rem',
  width: '6rem',
  fontWeight: 600,
  borderBottom: '2px solid white',
  textAlign: 'center',
  '&:hover': {
    color: '#E02020',
    borderBottom: '2px solid #E02020',
  },
  [theme.breakpoints.down('md')]: {
    padding: '4px 1.25rem',
    width: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    width: 'unset',
    padding: '4px 0',
  },
}));

function Menu() {
  const router = useRouter();

  return (
    <MenuWrapper>
      <MenuLogoWrapper onClick={() => router.push('/')}>
        <MenuLogo src={Logo} alt="noisesaigon" width={50} height={50} />
      </MenuLogoWrapper>
      <MenuItemGroup>
        <MenuItem onClick={() => router.push('/gigs')}>Gigs</MenuItem>
        <MenuItem onClick={() => router.push('/reads')}>Reads</MenuItem>
        <MenuItem onClick={() => router.push('/links')}>Links</MenuItem>
      </MenuItemGroup>
    </MenuWrapper>
  );
}

export default Menu;

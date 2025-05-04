import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material';

const ScrollTopBtnWrapper = styled('div')({
  position: 'fixed',
  bottom: '18px',
  right: '25px',
  padding: '0.5rem',
  borderRadius: '12px',
  backgroundColor: '#E02020',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

function ScrollTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <ScrollTopBtnWrapper onClick={scrollToTop}>
      <KeyboardArrowUpIcon fontSize="large" sx={{ color: 'white' }} />
    </ScrollTopBtnWrapper>
  );
}

export default ScrollTopBtn;

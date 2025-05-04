import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { styled } from '@mui/material';

const MoreButtonWrapper = styled('div')({
  padding: '8px 12px',
  borderRadius: '4px',
  border: '2px solid #000',
  cursor: 'pointer',
  marginTop: '20px',
  fontSize: '1.125rem',
  lineHeight: '1.25rem',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  '&:hover': {
    border: '2px solid #E02020',
    color: '#E02020',
  },
});

const noop = () => {};
function MoreButton({ text, onClick }) {
  return (
    <MoreButtonWrapper onClick={onClick ? onClick : noop}>
      <span>{text}</span>
      <KeyboardDoubleArrowRightIcon />
    </MoreButtonWrapper>
  );
}

export default MoreButton;

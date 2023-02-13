import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import useStyle from './styles';

function MoreButton({ text }) {
  const classes = useStyle();
  return (
    <div className={classes.mbWrapper}>
      <span>{text}</span>
      <KeyboardDoubleArrowRightIcon />
    </div>
  );
}

export default MoreButton;

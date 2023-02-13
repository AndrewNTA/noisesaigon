import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import useStyle from './styles';

const noop = () => {};
function MoreButton({ text, onClick }) {
  const classes = useStyle();
  return (
    <div className={classes.mbWrapper} onClick={onClick ? onClick : noop}>
      <span>{text}</span>
      <KeyboardDoubleArrowRightIcon />
    </div>
  );
}

export default MoreButton;

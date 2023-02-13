import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useStyles from './styles';

function ScrollTopBtn() {
  const classes = useStyles();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={classes.stbWrapper} onClick={scrollToTop}>
      <KeyboardArrowUpIcon fontSize="large" sx={{ color: 'white' }} />
    </div>
  );
}

export default ScrollTopBtn;

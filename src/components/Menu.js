import React from 'react';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';

function Menu() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.menuWrapper}>
      <div className={classes.menuLogo} onClick={() => navigate('/')}>
        <span className={classes.menuLogoHead}>Gig</span>
        <span className={classes.menuLogoTail}>Music</span>
      </div>
      <div className={classes.menuItemGroup}>
        <div className={classes.menuItem} onClick={() => navigate('/gigs')}>
          Gigs
        </div>
        <div className={classes.menuItem} onClick={() => navigate('/reads')}>
          Reads
        </div>
        <div className={classes.menuItem} onClick={() => navigate('/support')}>
          Support
        </div>
        <div className={classes.menuItem} onClick={() => navigate('/links')}>
          Links
        </div>
      </div>
    </div>
  );
}

export default Menu;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'static/images/logo.png'

import useStyles from './styles';

function Menu() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.menuWrapper}>
      <div className={classes.menuLogo} onClick={() => navigate('/')}>
        <img src={Logo} alt="noisesaigon" className={classes.menuLogo} />
      </div>
      <div className={classes.menuItemGroup}>
        <div className={classes.menuItem} onClick={() => navigate('/gigs')}>
          Gigs
        </div>
        <div className={classes.menuItem} onClick={() => navigate('/reads')}>
          Reads
        </div>
        <div className={classes.menuItem} onClick={() => navigate('/links')}>
          Links
        </div>
      </div>
    </div>
  );
}

export default Menu;

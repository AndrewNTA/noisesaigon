import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Spacing from './Spacing';
import useStyles from './styles';

function Footer() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={classes.footerLogo} onClick={() => navigate('/')}>
            GIGMUSIC
          </div>
          <Spacing size={32} />
          <div>© GigMusic Ltd. 2023</div>
          <div>ABN 88 666 444 555</div>
          <Spacing size={16} />
          <div>
            GigMusic is registered as a not-for-profit entity with the
            <a href="https://www.acnc.gov.au" className={classes.footerLinkGov}>
              Australian Charities and Not-for-profits Commission
            </a>
          </div>
          <Spacing size={16} />
          <div>
            The GigMusic "Can Man" mascot and all illustrations were created by
            and © Andrew Nguyen, 2023. All rights reserved.
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.footerTitle}>Navigation</div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <div className={classes.footerLink} onClick={() => navigate('/')}>
                Home
              </div>
              <div className={classes.footerLink}>Gig Guide</div>
              <div className={classes.footerLink}>Reads</div>
              <div className={classes.footerLink}>About & FAQ</div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div className={classes.footerLink}>Contact</div>
              <div className={classes.footerLink}>Links</div>
              <div className={classes.footerLink}>Join the Discord!</div>
              <div className={classes.footerLink}>
                Weekly Gig Guide Playlist
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;

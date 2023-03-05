import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Spacing from "./Spacing";
import useStyles from "./styles";

function Footer() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={classes.footerLogo} onClick={() => navigate("/")}>
            Noisesaigon
          </div>
          <Spacing size={32} />
          <div>
            Email: <b>noisesaigon@gmail.com</b>
          </div>
          <Spacing size={8} />
          <div>
            Instagram:{" "}
            <a
              className={classes.footerLink}
              href={"https://www.instagram.com/noisesaigon/"}
              target="_blank"
              rel="noreferrer"
            >
              @noisesaigon
            </a>
          </div>
          <Spacing size={8} />
          <div>
            Facebook:{" "}
            <a
              className={classes.footerLink}
              href={"https://www.facebook.com/noisesaigon/"}
              target="_blank"
              rel="noreferrer"
            >
              Noise Saigon
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.footerTitle}>Navigation</div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <div className={classes.footerItem} onClick={() => navigate("/")}>
                Home
              </div>
              <div
                className={classes.footerItem}
                onClick={() => navigate("/gigs")}
              >
                Gigs
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div
                className={classes.footerItem}
                onClick={() => navigate("/reads")}
              >
                Reads
              </div>
              <div
                className={classes.footerItem}
                onClick={() => navigate("/links")}
              >
                Links
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;

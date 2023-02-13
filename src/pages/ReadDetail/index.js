import React from 'react';
import { Container, Grid } from '@mui/material';
import { Menu, Footer, Spacing, ScrollTopBtn } from '../../components';
import Image from '../../static/images/read-image.jpg';
import useStyles from './styles';

function ReadDetail() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Menu />
      <Spacing size={48} />
      <div className={classes.main}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <div className={classes.readName}>
              "WE DROVE UP THE STREET HANDING IT TO PEOPLE OUT THE WINDOW": THE
              CANNANES ON HOW THEIR JOKE BAND TOOK THEM EVERYWHERE
            </div>
            <img src={Image} alt="music band" className={classes.readImg} />
            <div className={classes.readImgDesc}>
              Image: The Cannanes Promo Photo | L-R: Stephen O'Neil, Nick
              Ketley, Penny McBride, James Dutton, Frances Gibson, Bon King
            </div>
            <Spacing size={32} />
            <div className={classes.text}>
              The Cannanes are a band that were initially formed in Chippendale,
              Sydney in 1984. Over the years they've grown a devoted fanbase -
              including a significant following overseas - and have released 9
              LPs and a dizzying number of cassettes, 7"s and EPs. They've had a
              fiercely DIY ethos, self-recording and releasing most of their
              music, but have also had labels of the likes of Chapter Music
              (Melbourne), 555 Recordings (Arizona), and Ajax Records (Chicago)
              championing their work.
            </div>
            <div className={classes.text}>
              I was excited to chat to core members Fran Gibson and Stephen
              O'Neil about the history of The Cannanes, as well as their
              reflections on being an indie band that has eschewed most of the
              music industry's ways of working while watching Sydney and
              Australia change over the decades, as well as how it compares to
              their experiences overseas.
            </div>
            <div className={classes.text}>
              The Cannanes are playing the Chapter Music 30th Birthday
              Celebration with Thibault at The Vic on the Park this Saturday the
              30th of July.
            </div>
            <div className={classes.text}>
              To get going I'd love to chat about your last gig at the Golden
              Barley. Which if I understand correctly, was the first show in a
              fair while — like five or six years or something?
            </div>
            <div className={classes.text}>
              Fran Gibson: In Sydney, yeah. Two or three years since we'd
              played. We'd played in the US, done some other shows here and
              there. But Sydney, it had been a while.
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.label}>By</div>
            <div className={classes.value}>Joe Hardy</div>
            <Spacing size={32} />
            <div className={classes.label}>Published</div>
            <div className={classes.value}>26 Jul 2022</div>
          </Grid>
        </Grid>
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default ReadDetail;

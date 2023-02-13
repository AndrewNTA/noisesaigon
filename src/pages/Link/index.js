import React from 'react';
import { Container } from '@mui/material';
import { Menu, Footer, Spacing, ScrollTopBtn } from '../../components';
import useStyles from './styles';

function Link() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Menu />
      <Spacing size={48} />
      <div className={classes.main}>
        <div className={classes.section}>A BUNCH OF LINKS</div>
        <Spacing size={32} />
        <div className={classes.title}>ARTIST / COLLECTIVE RUN SPACES</div>
        <div className={classes.link}>Black Wire Records</div>
        <div className={classes.text}>
          Not-for-profit punx/label/gallery/legends. Current outlet is their
          new(ish) store/space in Forest Lodge, 19th Nervous Breakdown.
        </div>
        <div className={classes.link}>Open Source Collective</div>
        <div className={classes.text}>
          Absolutely incredible collective with a creative space out in
          Glendenning, and a sprawling online ecosystem that rules.
        </div>
        <Spacing size={32} />
        <div className={classes.title}>BLOGS</div>
        <div className={classes.link}>Best Before</div>
        <div className={classes.text}>
          A Sydney-based pop blog covering everything from locals to globals,
          with honest-to-goodness live reviews and everything.
        </div>
        <div className={classes.link}>David James Young</div>
        <div className={classes.text}>
          A fantastic writer and passionate scene supporter. DJY has had many
          podcasts and projects to his name, and his collected work at this site
          is well worth a read.
        </div>
        <div className={classes.link}>JAMs: Sydney's Music Family</div>
        <div className={classes.text}>
          JAMs is the brainchild of Sam Latto and there's tons of overlap
          between this project's aims and what SydneyMusic.net is trying to
          do... which is fantastic! Sam's got a thoughtful, well articulated and
          ambitious vision and plenty of activity executing on that vision:
          including a podcast, some featured gigs and a ton of blog-style
          content.
        </div>
        <div className={classes.link}>Sound Doctrine</div>
        <div className={classes.text}>
          Tommy Faith has long been writing one of the sharpest, wittiest music
          blogs in a time where there really aren't a lot of them. He's got an
          ear that can swiftly pull out novel music that deserves a listen - and
          he's not chasing trends, he's just vibing. We love Tommy.
        </div>
        <div className={classes.link}>The Creative Independent</div>
        <div className={classes.text}>
          An inspiring, no-bullshit initiative founded by former Pitchfork
          staffer Brandon Stosuy, featuring thoughtful and in-depth interviews
          with musicians and other creative folks.
        </div>
        <Spacing size={32} />
        <div className={classes.title}>DISCORD COMMUNITIES</div>
        <div className={classes.link}>Aussie Wigglers</div>
        <div className={classes.text}>
          This Discord is a thriving bunch of modular synth nerds.
        </div>
        <div className={classes.link}>Spirit Level</div>
        <div className={classes.text}>
          Spirit Level is an artist-run label and collective of likeminded
          humans. Their Discord is a really lovely community of creative
          support.
        </div>
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Link;

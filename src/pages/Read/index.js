import React from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Menu, Footer, Spacing } from '../../components';
import Bg from '../../static/images/bg_2.png';
import useStyles from './styles';

function Read() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Menu />
      <img src={Bg} alt="bg" className={classes.bg} />
      <Spacing size={48} />
      <div className={classes.main}>
        <div className={classes.section}>LATEST READS</div>
        <Spacing size={32} />
        <div
          className={classes.title}
          onClick={() => navigate('/reads/123456')}
        >
          "THE ARTS ARE ESSENTIAL TO OUR WAY OF BEING": LOU HARBIDGE FROM
          DOWNGIRL ON RESILIENCE AND DIY
        </div>
        <div className={classes.text}>
          "Music and art can be created more freely when it isn't treated solely
          as a commodity by companies that don't have the creators' interests at
          heart."
        </div>
        <Spacing size={32} />
        <div
          className={classes.title}
          onClick={() => navigate('/reads/123456')}
        >
          "WE DROVE UP THE STREET HANDING IT TO PEOPLE OUT THE WINDOW": THE
          CANNANES ON HOW THEIR JOKE BAND TOOK THEM EVERYWHERE
        </div>
        <div className={classes.text}>
          From making fantasy gig posters in Chippendale, to being hailed by NME
          and invited overseas for tours: The Cannanes reflect on their DIY
          ethos, how Sydney's changed over the decades, and their experiences
          with music communities internationally.
        </div>
        <Spacing size={32} />
        <div
          className={classes.title}
          onClick={() => navigate('/reads/123456')}
        >
          "THE MORE YOU INVEST IN THE ARTS, THE HEALTHIER THE SCENE WILL
          BECOME": KIRSTY TICKLE OF PARTY DOZEN ON DIY AND THE DIRE STATE OF
          ARTS FUNDING
        </div>
        <div className={classes.text}>
          In the debut edition of our occasional Q&A feature, Kirsty gives us an
          intro to the community that Party Dozen came from, some thoughts on
          what can help our local community thrive more, and the importance of a
          broken PA in becoming a great performer.
        </div>
        <Spacing size={32} />
        <div
          className={classes.title}
          onClick={() => navigate('/reads/123456')}
        >
          "THIS PLACE WOULD NOT EXIST WITHOUT THE AUDIENCE": NICK SHIMMIN OF THE
          PEOPLE'S REPUBLIC ON CREATING SYDNEY'S MOST UNIQUE HOUSE SHOWS
        </div>
        <div className={classes.text}>
          13 years. 120 shows. 1 living room. We caught up with Nick Shimmin of
          the People's Republic to talk about creating an alternative space for
          artists and audience to enjoy a shared sense of community.
        </div>
        <Spacing size={32} />
        <div className={classes.section}>OCT 2022</div>
        <Spacing size={32} />
        <div
          className={classes.title}
          onClick={() => navigate('/reads/123456')}
        >
          "WE DROVE UP THE STREET HANDING IT TO PEOPLE OUT THE WINDOW": THE
          CANNANES ON HOW THEIR JOKE BAND TOOK THEM EVERYWHERE
        </div>
        <div className={classes.text}>
          From making fantasy gig posters in Chippendale, to being hailed by NME
          and invited overseas for tours: The Cannanes reflect on their DIY
          ethos, how Sydney's changed over the decades, and their experiences
          with music communities internationally.
        </div>
        <Spacing size={32} />
        <div
          className={classes.title}
          onClick={() => navigate('/reads/123456')}
        >
          "THIS PLACE WOULD NOT EXIST WITHOUT THE AUDIENCE": NICK SHIMMIN OF THE
          PEOPLE'S REPUBLIC ON CREATING SYDNEY'S MOST UNIQUE HOUSE SHOWS
        </div>
        <div className={classes.text}>
          13 years. 120 shows. 1 living room. We caught up with Nick Shimmin of
          the People's Republic to talk about creating an alternative space for
          artists and audience to enjoy a shared sense of community.
        </div>
        <Spacing size={32} />
      </div>
      <Footer />
    </Container>
  );
}

export default Read;

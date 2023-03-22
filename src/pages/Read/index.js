import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import {
  Menu,
  Footer,
  Spacing,
  ScrollTopBtn,
  SkeletonLoading,
  Article,
  MetaTags
} from "components";
import Banner from "static/images/banner.png";
import useStyles from "./styles";

const ARTICLES_QUERY = gql`
  query Articles {
    articles(first: 5, orderBy: publishedAt_DESC) {
      brief
      id
      name
    }
  }
`;

function Read() {
  const classes = useStyles();
  const { data, loading } = useQuery(ARTICLES_QUERY);

  const readList = data && data.articles;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <MetaTags />
      <Menu />
      <img src={Banner} alt="bg" className={classes.bg} />
      <Spacing size={48} />
      <div className={classes.main}>
        <div className={classes.section}>LATEST READS</div>
        <Spacing size={32} />
        {loading && <SkeletonLoading length={4} />}
        {!loading &&
          readList &&
          readList.map((a) => (
            <Article key={a.id} id={a.id} content={a.brief} title={a.name} />
          ))}
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Read;

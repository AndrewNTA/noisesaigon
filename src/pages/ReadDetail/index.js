import React, { useEffect, useMemo } from "react";
import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import ImageGallery from "react-image-gallery";
import { useParams, useNavigate } from "react-router-dom";
import {
  Menu,
  Footer,
  Spacing,
  ScrollTopBtn,
  SkeletonReadLoading,
  MetaTags,
} from "components";
import { formatDisplayFullDate, genKeyWords } from "utils";
import useStyles from "./styles";
import "react-image-gallery/styles/css/image-gallery.css";

const ARTICLE_QUERY = gql`
  query Article($id: ID) {
    article(where: { id: $id }) {
      author
      id
      metaTags
      name
      brief
      publishedAt
      content {
        html
      }
      gallery(first: 30) {
        url(
          transformation: {
            image: { resize: { fit: clip, height: 600, width: 970 } }
          }
        )
      }
      photo {
        url(
          transformation: {
            image: { resize: { fit: clip, height: 600, width: 970 } }
          }
        )
      }
    }
  }
`;

const genImages = (arr) => {
  if (!arr || arr.length === 0) return null;
  return arr.map((g) => ({
    original: g.url,
    thumbnail: g.url,
  }));
};

function ReadDetail() {
  const classes = useStyles();
  const { readId } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useQuery(ARTICLE_QUERY, {
    variables: {
      id: readId,
    },
  });
  const articleData = data?.article ?? null;
  const imageList = useMemo(
    () => genImages(articleData && articleData.gallery),
    [articleData]
  );
  const keyWords = useMemo(
    () => genKeyWords(articleData && articleData.metaTags),
    [articleData]
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!loading && !articleData) {
    navigate("/not-found");
  }
  return (
    <Container maxWidth="lg">
      <MetaTags
        keyWords={keyWords}
        title={articleData?.name}
        desc={articleData?.brief}
      />
      <Menu />
      <Spacing size={48} />
      <div className={classes.main}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            {loading && <SkeletonReadLoading length={4} />}
            {!loading && articleData && (
              <>
                <div className={classes.readName}>{articleData.name}</div>
                {articleData?.photo?.url && (
                  <img
                    src={articleData?.photo?.url}
                    alt="something went wrong"
                    className={classes.readImg}
                  />
                )}
                <Spacing size={32} />
                <div
                  className={classes.text}
                  dangerouslySetInnerHTML={{
                    __html: articleData?.content?.html ?? "",
                  }}
                />
              </>
            )}
            <Spacing size={32} />
            {imageList && <ImageGallery items={imageList} />}
          </Grid>
          <Grid item xs={12} md={3}>
            {loading && (
              <>
                <Spacing size={12} />
                <Typography component="div" key="h5" variant="h5">
                  <Skeleton width="50%" animation="false" />
                </Typography>
                <Spacing size={12} />
                <Skeleton width="80%" animation="wave" />
                <Spacing size={32} />
                <Typography component="div" key="h5" variant="h5">
                  <Skeleton width="50%" animation="false" />
                </Typography>
                <Spacing size={12} />
                <Skeleton width="80%" animation="wave" />
              </>
            )}
            {!loading && articleData && (
              <>
                <div className={classes.label}>By</div>
                <div className={classes.value}>{articleData?.author}</div>
                <Spacing size={32} />
                <div className={classes.label}>Published</div>
                <div className={classes.value}>
                  {formatDisplayFullDate(articleData?.publishedAt)}
                </div>
              </>
            )}
          </Grid>
        </Grid>
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default ReadDetail;

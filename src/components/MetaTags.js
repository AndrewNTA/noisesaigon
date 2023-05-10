import React from "react";
import { Helmet } from "react-helmet";

const DEFAULT_TITLE = "Noise Saigon";
const DEFAULT_DESCRIPTION = "live.music.SaiGon.";
const DEFAULT_KEY_WORDS = "Music, Events, Saigon, Drums, Festival, Liveshow, Bia, Live, Coffee, Rock, Ho Chi Minh";
const DEFAULT_THUMBNAIL_URL =
  "https://media.graphassets.com/resize=fit:clip,height:600,width:970/Do1dGjAUTWeFv64ZSMpu";

function MetaTags({ title, desc, keyWords, thumbnailUrl }) {
  return (
    <Helmet>
      <title>{title ? title : DEFAULT_TITLE}</title>
      <link rel="canonical" href="https://www.noisesaigon.com/" />
      <meta
        property="article:tag"
        content={keyWords ? keyWords : DEFAULT_KEY_WORDS}
      ></meta>
      <meta
        name="news_keywords"
        content={keyWords ? keyWords : DEFAULT_KEY_WORDS}
      ></meta>
      <meta name="description" content={desc ? desc : DEFAULT_DESCRIPTION} />
      <meta
        name="keywords"
        content={keyWords ? keyWords : DEFAULT_KEY_WORDS}
      ></meta>

      {/* Start Facebook metatag */}
      <meta property="og:title" content={title ? title : DEFAULT_TITLE} />
      <meta property="og:site_name" content="www.noisesaigon.com"></meta>
      <meta
        property="og:url"
        itemprop="url"
        content="https://www.noisesaigon.com/"
      ></meta>
      <meta
        content={desc ? desc : DEFAULT_DESCRIPTION}
        itemprop="description"
        property="og:description"
        data-react-helmet="true"
      ></meta>
      <meta
        property="og:image"
        itemprop="thumbnailUrl"
        content={thumbnailUrl ? thumbnailUrl : DEFAULT_THUMBNAIL_URL}
        data-react-helmet="true"
      />
      <meta
        content={desc ? desc : DEFAULT_DESCRIPTION}
        itemprop="headline"
        property="og:title"
        data-react-helmet="true"
      ></meta>
      <meta property="og:image:height" content="800"></meta>
      <meta property="og:image:height" content="354"></meta>
      {/* End Facebook metatag */}
      {/* Start twitter metatag */}
      <meta name="twitter:card" value="summary"></meta>
      <meta name="twitter:url" content="https://www.noisesaigon.com/"></meta>
      <meta name="twitter:title" content={title ? title : DEFAULT_TITLE}></meta>
      <meta
        name="twitter:description"
        content={desc ? desc : DEFAULT_DESCRIPTION}
        data-react-helmet="true"
      ></meta>
      <meta
        name="twitter:image"
        content={thumbnailUrl ? thumbnailUrl : DEFAULT_THUMBNAIL_URL}
        data-react-helmet="true"
      ></meta>
      {/* End twitter metatag */}
    </Helmet>
  );
}

export default MetaTags;

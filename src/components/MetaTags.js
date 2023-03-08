import React from "react";
import { Helmet } from "react-helmet";

const DEFAULT_TITLE = "Noise Saigon";
const DEFAULT_DESCRIPTION = "000 Make some noise! Music every day every time";
const DEFAULT_KEY_WORDS = "Music, Events, Saigon, Drums, Festival, Liveshow";
const DEFAULT_THUMBNAIL_URL =
  "https://media.graphassets.com/resize=fit:clip,height:600,width:970/YA6TZwpvQfK31H93Dpzu";

function MetaTags({ title, desc, keyWords, thumbnailUrl }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? title : DEFAULT_TITLE}</title>
      <link rel="canonical" href="https://noisesaigon.com/" />
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
      <meta property="og:site_name" content="noisesaigon.com"></meta>
      <meta
        property="og:url"
        itemprop="url"
        content="https://noisesaigon.com/"
      ></meta>
      <meta
        content={desc ? desc : DEFAULT_DESCRIPTION}
        itemprop="description"
        property="og:description"
      ></meta>
      <meta
        property="og:image"
        itemprop="thumbnailUrl"
        content={thumbnailUrl ? thumbnailUrl : DEFAULT_THUMBNAIL_URL}
      />
      <meta
        content={desc ? desc : DEFAULT_DESCRIPTION}
        itemprop="headline"
        property="og:title"
      ></meta>
      <meta property="og:image:height" content="800"></meta>
      <meta property="og:image:height" content="354"></meta>
      {/* End Facebook metatag */}
      {/* Start twitter metatag */}
      <meta name="twitter:card" value="summary"></meta>
      <meta name="twitter:url" content="https://noisesaigon.com/"></meta>
      <meta name="twitter:title" content={title ? title : DEFAULT_TITLE}></meta>
      <meta
        name="twitter:description"
        content={desc ? desc : DEFAULT_DESCRIPTION}
      ></meta>
      <meta
        name="twitter:image"
        content={thumbnailUrl ? thumbnailUrl : DEFAULT_THUMBNAIL_URL}
      ></meta>
      {/* End twitter metatag */}
    </Helmet>
  );
}

export default MetaTags;

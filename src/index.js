import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Helmet } from "react-helmet";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/cle8a4jh903yk01uf4eqj90z0/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Noise Saigon</title>
          <link rel="canonical" href="https://noisesaigon.com/" />
          <meta
            property="article:tag"
            content="Music, Events, Saigon, Drums, Festival, Liveshow"
          ></meta>
          <meta
            name="news_keywords"
            content="Music, Events, Saigon, Drums, Festival, Liveshow"
          ></meta>
          <meta
            name="description"
            content="Make some noise! Music every day every time"
          />
          <meta
            name="keywords"
            content="Noise SaiGon! Make some noise! Music every day every time"
          ></meta>

          {/* Start Facebook metatag */}
          <meta property="og:title" content="Noise SaiGon" />
          <meta property="og:site_name" content="noisesaigon.com"></meta>
          <meta
            property="og:url"
            itemprop="url"
            content="https://noisesaigon.com/"
          ></meta>
          <meta
            content="Noise SaiGon! Make some noise! Music every day every time"
            itemprop="description"
            property="og:description"
          ></meta>
          <meta
            property="og:image"
            itemprop="thumbnailUrl"
            content="https://media.graphassets.com/resize=fit:clip,height:600,width:970/YA6TZwpvQfK31H93Dpzu"
          />
          <meta property="og:image:height" content="354"></meta>
          <meta property="og:image:height" content="354"></meta>
          {/* End Facebook metatag */}
          {/* Start twitter metatag */}
          <meta name="twitter:card" value="summary"></meta>
          <meta name="twitter:url" content="https://noisesaigon.com/"></meta>
          <meta
            content="Noise SaiGon! Make some noise! Music every day every time"
            itemprop="headline"
            property="og:title"
          ></meta>
          <meta name="twitter:title" content="Noise SaiGon"></meta>
          <meta
            name="twitter:description"
            content="Noise SaiGon Make some noise! Music every day every time"
          ></meta>
          <meta
            name="twitter:image"
            content="https://media.graphassets.com/resize=fit:clip,height:600,width:970/YA6TZwpvQfK31H93Dpzu"
          ></meta>
          {/* End twitter metatag */}
        </Helmet>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

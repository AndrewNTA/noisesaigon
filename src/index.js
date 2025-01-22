import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 'https://ap-northeast-1.cdn.hygraph.com/content/cley16yxc0u1801ujc0ttavk8/master'
const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/cley16yxc0u1801ujc0ttavk8/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

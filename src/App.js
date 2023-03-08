import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Gig from "./pages/Gig";
import Link from "./pages/Link";
import Read from "./pages/Read";
import ReadDetail from "./pages/ReadDetail";
import NotFound from "./pages/NotFound";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/gigs" element={<Gig />} />
        <Route path="/reads" element={<Read />} />
        <Route path="/links" element={<Link />} />
        <Route path="/reads/:readId" element={<ReadDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

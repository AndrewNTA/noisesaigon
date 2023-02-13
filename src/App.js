import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import Gig from './pages/Gig';
import Link from './pages/Link';
import Support from './pages/Support';
import Read from './pages/Read';
import ReadDetail from './pages/ReadDetail';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/gigs" element={<Gig />} />
        <Route path="/reads" element={<Read />} />
        <Route path="/links" element={<Link />} />
        <Route path="/support" element={<Support />} />
        <Route path="/reads/:id" element={<ReadDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

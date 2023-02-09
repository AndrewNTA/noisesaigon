import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gig from './pages/Gig';

function App() {
  return (
    <Routes>
      <Route path="/gigs" element={<Gig />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

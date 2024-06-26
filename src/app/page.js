'use client';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home';

export default function Page() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null; // Render nothing on the server
  }

  return (
    <Router>
      {
        //<Navbar />
      }
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

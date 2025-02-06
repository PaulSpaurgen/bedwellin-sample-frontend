import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './page-components/Home';
import Properties from './page-components/Properties';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
          </Routes>
        </Suspense>


    </BrowserRouter>

  );
};

export default App;

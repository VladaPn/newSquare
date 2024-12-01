import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar'; // Tvoja Navbar komponenta
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/#home" element={<Home/>} />
        <Route path="/#projects" element={<div>Ovo je Projects sekcija.</div>} />
        <Route path="/#contact" element={<div>Ovo je Contact sekcija.</div>} />
      </Routes>
    </Router>
  );
};

export default App;

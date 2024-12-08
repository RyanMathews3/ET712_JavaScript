import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';

import Cheddar from './pages/Cheddar';

import Brie from './pages/Brie';

import Gouda from './pages/Gouda';



function App() {

  return (

    <Router>

      <div>

        <nav>

          <Link to="/">Home</Link> | 

          <Link to="/cheddar">Cheddar</Link> | 

          <Link to="/brie">Brie</Link> | 

          <Link to="/gouda">Gouda</Link>

        </nav>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/cheddar" element={<Cheddar />} />

          <Route path="/brie" element={<Brie />} />

          <Route path="/gouda" element={<Gouda />} />

        </Routes>

      </div>

    </Router>

  );

}



export default App;


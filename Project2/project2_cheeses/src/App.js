import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

import SoftCheeses from "./pages/SoftCheeses";

import HardCheeses from "./pages/HardCheeses";

import BlueCheeses from "./pages/BlueCheeses";

import './App.css';



function App() {

  return (

    <Router>

      <div>

        <header>

          <h1>Cheese Delight</h1>

          <Link to="/">Home</Link>

        </header>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/soft-cheeses" element={<SoftCheeses />} />

          <Route path="/hard-cheeses" element={<HardCheeses />} />

          <Route path="/blue-cheeses" element={<BlueCheeses />} />

        </Routes>

      </div>

    </Router>

  );

}



export default App;



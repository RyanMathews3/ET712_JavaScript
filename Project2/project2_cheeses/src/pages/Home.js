import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-container">
    <h1>Welcome to Cheese Delight</h1>
    <p>Explore the world of cheeses through our curated sections. We offer a wide variety of cheeses, from creamy brie to sharp cheddar. We strive on being best thats why our cheeses are voted to be the absolute BEST!</p>

    <nav>
      <Link to="/soft-cheeses">Soft Cheeses</Link>
      <Link to="/hard-cheeses">Hard Cheeses</Link>
      <Link to="/blue-cheeses">Blue Cheeses</Link>
    </nav>

    <div className="image-section">
      <div className="image-slot">
        <img src="hardcheese.jpg" alt="Cheese Variety 1" />
        <p>Soft Cheese Selection</p>
      </div>
      <div className="image-slot">
        <img src="softcheese.jpg" alt="Cheese Variety 2" />
        <p>Hard Cheese Delights</p>
      </div>
      <div className="image-slot">
        <img src="blue.jpg" alt="Cheese Variety 3" />
        <p>Blue Cheese Wonders</p>
      </div>
    </div>
  </div>
);

export default Home;

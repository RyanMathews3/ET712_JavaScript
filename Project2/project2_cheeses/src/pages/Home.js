import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Cheese Explorer</h1>
      <p>Discover delicious dishes made with your favorite cheeses.</p>

      <div className="link-container">
        <div className="cheese-item">
          <img
            src="/images/cheddar.jpg"
            alt="Cheddar Cheese"
            className="cheese-image"
          />
          <Link to="/cheddar" className="explore-link" aria-label="Explore Cheddar Dishes">
            Explore Cheddar Dishes
          </Link>
        </div>
        
        <div className="cheese-item">
          <img
            src="/images/brie.jpg"
            alt="Brie Cheese"
            className="cheese-image"
          />
          <Link to="/brie" className="explore-link" aria-label="Explore Brie Dishes">
            Explore Brie Dishes
          </Link>
        </div>
        
        <div className="cheese-item">
          <img
            src="/images/gouda.jpg"
            alt="Gouda Cheese"
            className="cheese-image"
          />
          <Link to="/gouda" className="explore-link" aria-label="Explore Gouda Dishes">
            Explore Gouda Dishes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

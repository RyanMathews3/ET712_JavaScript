import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <img
          src="/images/home1.jpg"
          alt="Cologne Store Banner"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to Cologne Store</h1>
          <p>
            Explore the finest fragrances for every occasion. Unleash the essence
            of luxury.
          </p>
          <button className="btn">Shop Now</button>
        </div>
      </header>

      {/* Call-to-Action Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-row">
          <div className="feature-card">
            <h3>Luxury Fragrances</h3>
            <p>
              Discover our exclusive collection crafted with precision and care.
            </p>
          </div>
          <div className="feature-card">
            <h3>Affordable Prices</h3>
            <p>Premium quality colognes at prices you'll love.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Shipping</h3>
            <p>Get your favorite scents delivered to your doorstep in no time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

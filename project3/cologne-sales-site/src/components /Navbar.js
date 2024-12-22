import React from 'react';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <h1>Cologne Store</h1>
      <div>
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('mens')}>Men's Cologne</button>
        <button onClick={() => onNavigate('womens')}>Women's Cologne</button>
        <button onClick={() => onNavigate('unisex')}>Unisex Cologne</button>
        <button onClick={() => onNavigate('cart')}>Go to Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;

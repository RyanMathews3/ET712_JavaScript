import React, { useState } from 'react';
import Navbar from './components /Navbar'; // Ensure the path is correct (remove extra space)
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import CartPage from './pages/CartPage'; // Import the CartPage component
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State to track the current page
  const [cart, setCart] = useState([]); // State to manage cart items

  // Function to add products to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to render the appropriate page based on `currentPage`
  const renderPage = () => {
    switch (currentPage) {
      case 'mens':
        return <ProductCategory category="mens" addToCart={addToCart} />;
      case 'womens':
        return <ProductCategory category="womens" addToCart={addToCart} />;
      case 'unisex':
        return <ProductCategory category="unisex" addToCart={addToCart} />;
      case 'cart':
        return <CartPage cart={cart} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar onNavigate={setCurrentPage} /> {/* Pass navigation handler to Navbar */}
      {renderPage()} {/* Render the appropriate page */}
    </>
  );
}

export default App;

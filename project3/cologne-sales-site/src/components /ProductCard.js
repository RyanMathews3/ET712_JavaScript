import React from 'react';

const ProductCard = ({ product, onClick, addToCart }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={(e) => {
        e.stopPropagation(); // Prevent modal opening
        addToCart(product);
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

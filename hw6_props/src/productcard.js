import React from 'react';
import './productcard.css'; // Import CSS file

const ProductCard = ({ name, image, price, availability }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <p className={`availability ${availability === 'In Stock' ? 'in-stock' : 'out-of-stock'}`}>
        {availability}
      </p>
    </div>
  );
};

export default ProductCard;

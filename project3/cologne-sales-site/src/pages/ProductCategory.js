import React, { useState } from 'react';
import products from '../data/Products';
import ProductCard from '../components /ProductCard';
import ProductModal from '../components /ProductModal';

const ProductCategory = ({ category, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container">
      <h1 className="text-center">{category === 'mens' ? "Men's Cologne" : category === 'womens' ? "Women's Cologne" : "Unisex Cologne"}</h1>
      <div className="row">
        {products[category].map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
            addToCart={addToCart}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductCategory;

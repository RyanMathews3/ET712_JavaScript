import React from 'react';
import ProductCard from './productcard';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230526/pngtree-laptop-computer-with-glowing-lights-on-it-image_2645481.jpg',
      price: 899.99,
      availability: 'In Stock',
    },
    {
      id: 2,
      name: 'Iphone',
      image: 'https://cdn.mos.cms.futurecdn.net/LiuQPUbn5totwWrWRLJVBc-1200-80.jpeg',
      price: 499.99,
      availability: 'Out of Stock',
    },
    {
      id: 3,
      name: 'Headphones',
      image: 'https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00198_01_studio_wireless_headphones_matte_1016367.jpg',
      price: 129.99,
      availability: 'In Stock',
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          availability={product.availability}
        />
      ))}
    </div>
  );
};

export default App;

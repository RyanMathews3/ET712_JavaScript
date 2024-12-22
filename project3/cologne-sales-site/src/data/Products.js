import React, { useState } from 'react';
const products = {
    mens: [
      { id: 1, title: "Men's Cologne 1", price: 59.99, description: "A fresh scent for men.", image: '/images/Most_Wanted.jpg' },
      { id: 2, title: "Men's Cologne 2", price: 59.99, description: "A bold fragrance.", image: '/images/uomo.jpg' },
      { id: 3, title: "Men's Cologne 3", price: 59.99, description: "A cologne for a King", image: '/images/Royal.jpg' },
      { id: 4, title: "Men's Cologne 4", price: 59.99, description: "Everyones Favorite", image: '/images/man4.jpg' },
      { id: 5, title: "Men's Cologne 5", price: 59.99, description: "An everyday fresh scent", image: '/images/man5.jpg' },
      { id: 6, title: "Men's Cologne 6", price: 59.99, description: "A sweet but lovely scent", image: '/images/man6.jpg' },
      { id: 7, title: "Men's Cologne 7", price: 59.99, description: "Cologne for a Hero", image: '/images/mann7.jpg' },
      { id: 8, title: "Men's Cologne 8", price: 59.99, description: "A lovely Vanilla and wood smell.", image: '/images/man8.jpg' },
      { id: 9, title: "Men's Cologne 9", price: 59.99, description: "A bold fragrance.", image: '/images/man9.jpg' },
    ],
    womens: [
      { id: 1, title: "Women's Cologne 1", price: 39.99, description: "A light floral scent.", image: '/images/wom1.jpg' },
      { id: 2, title: "Women's Cologne 2", price: 49.99, description: "Elegant and luxurious.", image: '/images/wom2.jpg' },
      { id: 3, title: "Women's Cologne 3", price: 39.99, description: "A royal scent.", image: '/images/Paris.jpg' },
      { id: 4, title: "Women's Cologne 4", price: 39.99, description: "A sweet scent.", image: '/images/wom4.jpg' },
      { id: 5, title: "Women's Cologne 5", price: 39.99, description: "A earthy scent.", image: '/images/wom5.jpg' },
      { id: 6, title: "Women's Cologne 6", price: 39.99, description: "A grand scent.", image: '/images/wom6.jpg' },
      { id: 7, title: "Women's Cologne 7", price: 39.99, description: "Something trendy?.", image: '/images/wom7.jpg' },
      { id: 8, title: "Women's Cologne 8", price: 39.99, description: "A very intense sweet aroma.", image: '/images/wom8.jpg' },
      { id: 9, title: "Women's Cologne 9", price: 39.99, description: "Something Calm.", image: '/images/wom9.jpg' },
    ],
    unisex: [
      { id: 1, title: "Unisex Cologne 1", price: 44.99, description: "A vanilla and citrus aroma", image: '/images/uni1.jpg' },
      { id: 2, title: "Unisex Cologne 2", price: 54.99, description: "A universal favorite.", image: '/images/uni2.jpg' },
      { id: 3, title: "Unisex Cologne 3", price: 54.99, description: "Something unique.", image: '/images/creed3.jpg' },
      { id: 4, title: "Unisex Cologne 4", price: 44.99, description: "Very Appealing", image: '/images/uni4.jpg' },
      { id: 5, title: "Unisex Cologne 5", price: 44.99, description: "Earthy", image: '/images/uni5.jpg' },
      { id: 6, title: "Unisex Cologne 6", price: 44.99, description: "Perfect for everyone.", image: '/images/uni6.jpg' },
      { id: 7, title: "Unisex Cologne 7", price: 44.99, description: "The Best", image: '/images/uni7.jpg' },
      { id: 8, title: "Unisex Cologne 8", price: 44.99, description: "Popular , sweet, cool", image: '/images/uni8.jpg' },
      { id: 9, title: "Unisex Cologne 9", price: 44.99, description: "Intense", image: '/images/uni9.jpg' },
    ],
  };
  
  export default products;
  
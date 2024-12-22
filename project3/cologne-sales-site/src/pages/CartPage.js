import React from 'react';

const CartPage = ({ cart }) => {
  const calculateSubtotal = () => cart.reduce((total, item) => total + item.price, 0);
  const tax = calculateSubtotal() * 0.0816; // New York sales tax: 8.16%
  const total = calculateSubtotal() + tax;

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="card">
                <h2>{item.title}</h2>
                <p>${item.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

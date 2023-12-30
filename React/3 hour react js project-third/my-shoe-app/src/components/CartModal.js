// src/components/CartModal.js

import React from 'react';

const CartModal = ({ show, onHide, cartItems }) => {
  return (
    <div className={`cart-modal-overlay ${show ? 'show' : ''}`} onClick={onHide}>
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-button" onClick={onHide}>
            &times;
          </button>
        </div>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.shoeName} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartModal;

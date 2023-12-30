// src/components/Shoe.js

import React from 'react';

const Shoe = ({ shoe, onAddToCart }) => {
  return (
    <div className="shoe-card">
      <div className="shoe-details">
        <h5 className="shoe-name">{shoe.shoeName}</h5>
        <p className="shoe-description">{shoe.description}</p>
        <p className="shoe-price">Price: ${shoe.price}</p>
        <p className="shoe-size">Size: {shoe.size}</p>
        <button className="add-to-cart-button" onClick={() => onAddToCart(shoe)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Shoe;

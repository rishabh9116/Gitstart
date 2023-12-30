// src/components/AddToCartButton.js

import React from 'react';

const AddToCartButton = ({ onClick }) => {
  return (
    <button className="add-to-cart-button" onClick={onClick}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;

// src/components/ShoeList.js

import React from 'react';
import Shoe from './Shoe';

const ShoeList = ({ shoes, onAddToCart }) => {
  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <Shoe key={shoe.id} shoe={shoe} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ShoeList;

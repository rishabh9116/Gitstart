// src/App.js

import React, { useState } from 'react';
import ShoeList from './components/ShoeList';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (shoe) => {
    setCartItems([...cartItems, shoe]);
  };

  const shoes = [
    {
      id: 1,
      shoeName: 'Navy Blue Armani Shoes',
      description: '100 % cotton',
      price: 1299,
      size: 'L',
    },
    
    {
      id: 2,
      shoeName: 'Gucci Shoes',
      description: '100 % cotton',
      price: 2000,
      size: 'M',
    },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Shoe Web Site</h1>
        <div className="cart-container">
          <span className="bi bi-cart">cart</span>
          <span className="cart-badge">{cartItems.length}</span>
        </div>
      </header>

      <ShoeList shoes={shoes} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;




    
import React from 'react';

import CartContext from './CartContext';








const CartProvider = ({children}) => {
  

//   const addItemToCartHandler = (item) => {
//     dispatchCartAction({type: 'ADD', item: item});
//   };

//   const removeItemFromCartHandler = (id) => {
//     dispatchCartAction({type: 'REMOVE', id: id});
//   };

  const cartContext = {
   shirts:[],
   totalPrice:0
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

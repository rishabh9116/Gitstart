import React from 'react';
import './App.css';
import { Button ,Alert , Accordion} from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Products from './components/Products';
import { useState  } from 'react';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';

let App=()=> {
  const [cartIsShown,setCartIsShown] = useState(false);


  const hideCartHandler =() => {
    setCartIsShown(false);
  }

  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  return (
    <CartProvider>
    <NavBar onShowCart={showCartHandler} />
    { cartIsShown && <Cart onClose= {hideCartHandler} />}
    <Products />
    </CartProvider>
  );
}

export default App;

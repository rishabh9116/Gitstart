import React from 'react';
import Home from './components/pages/Home';
import { NavLink , BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import { Button ,Alert , Accordion} from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Products from './components/Products';
import { useState  } from 'react';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';
import About from './components/pages/About';
import Store from './components/pages/Store';



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
    <BrowserRouter>
     
    <NavBar onShowCart={showCartHandler} />
    { cartIsShown && <Cart onClose= {hideCartHandler} />}
   
  
    
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path='/store'  element={<Store />} />
     </Routes>
     </BrowserRouter>
    </CartProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Button ,Alert , Accordion} from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Products from './components/Products';


let App=()=> {
  return (
    <>
    <NavBar />
    <Header/>
    <Products />
    </>
  );
}

export default App;

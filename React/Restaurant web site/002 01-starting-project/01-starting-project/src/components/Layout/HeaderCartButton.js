import React, { useContext, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import AvailableMeals from '../Meals/AvailableMeals'
import CartContext from '../../store/cart-context'


const HeaderCartButton = (props) => {
   const cartCtx = useContext(CartContext);
  
   const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
   },0);

//  const numberOfCartItems = cartCtx.items.length;

   console.log("In HeaderCartButton  Cart Items ", numberOfCartItems);
  return (
   <button className={classes.button} onClick={props.onClick} >
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span  className={classes.badge}>{numberOfCartItems}</span>
   </button>
  )
}

export default HeaderCartButton
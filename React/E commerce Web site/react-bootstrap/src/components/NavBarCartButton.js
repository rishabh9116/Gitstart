import React,{useContext} from 'react'
import CartContext from '../store/cart-context';

const NavBarCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item)=>{
   return curNumber + item.amount;
  },0);
  return (
    <div>
      <button onClick={props.onClick} > 
      <span>cart</span>
      <span>{numberOfCartItems}</span>
       </button>
    </div>
  )
}

export default NavBarCartButton
import React ,{useContext} from 'react'
import CartItem from './CartItem'
import CartContext from '../store/cart-context'


const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };

    const cartItems = (
      <ul>
       
    { cartCtx.items.map((item)=>
    <CartItem 
    title = {item.title} 
    price={item.price} 
    imageUrl={item.imageUrl}
     
    />
   )
       }
      </ul>
    );

  
  return (
    <div>
      <div>
      {cartItems}
      </div>
      
      <div>
        <button onClick={props.onClose}>X</button>
      </div>

    </div>
  )
}

export default Cart
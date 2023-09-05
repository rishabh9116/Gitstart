import React ,{useContext} from 'react'
import CartItem from './CartItem'
import CartContext from '../store/cart-context'
import Modal from './UI/Modal'

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

   
  
  return (
    <Modal>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <h1 style={{fontFamily:"sans-serif"}}>My Cart</h1>
      <button onClick={props.onClose}>X</button>
      </div>
      
      <div>
      {cartCtx.items.map((item)=>
    <CartItem 
    title = {item.title} 
    price={item.price} 
    imageUrl={item.imageUrl}
     
    />
   )}
      </div>
      
      <div style={{ display:"flex",
        justifyContent:"center",}}>
      <button style={{
       
        fontFamily:"sans-serif",
        fontSize:"25px",
        backgroundColor:"aqua"
        }}>
        PURCHASE
      </button>
      </div>
     
      
    

    </Modal>
  )
}

export default Cart;
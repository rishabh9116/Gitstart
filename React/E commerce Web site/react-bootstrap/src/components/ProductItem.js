import React ,{useContext} from 'react';
import { Button } from 'react-bootstrap';
import CartContext from '../store/cart-context';
import Card from './UI/Card';

const ProductItem = ({title,price,imageUrl}) => {
  
  const cartCtx = useContext(CartContext);

  const clickHandler = () => {
   cartCtx.addItem({
  title:title,
  imageUrl:imageUrl,
  price:price,
  amount:1
})    
  }

  return (
    <Card>
     <div style={{
      fontFamily:"sans-serif",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
     }}><h2>{title}</h2></div>
    <div>
        <img src={imageUrl} />
    </div>
     <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      margin:"5px"
     }}>
        <span style={{ fontFamily:"sans-serif",
            fontSize:"25px"}}>${price}</span>
            
         <button onClick={clickHandler}
              style={{
              fontFamily:"sans-serif",
              fontSize:"25px",
              backgroundColor:"aqua"
              }}
         >ADD TO CART</button>
     </div>
    </Card>
  )
}

export default ProductItem
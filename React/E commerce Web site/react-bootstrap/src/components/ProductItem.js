import React ,{useContext} from 'react';
import { Button } from 'react-bootstrap';
import CartContext from '../store/cart-context';


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
    <div>
     <div>{title}</div>
    <div>
        <img src={imageUrl} />
    </div>
     <div>
        <span>{price}</span>
        <Button> <button onClick={clickHandler}>ADD TO CART</button></Button>
     </div>
    </div>
  )
}

export default ProductItem
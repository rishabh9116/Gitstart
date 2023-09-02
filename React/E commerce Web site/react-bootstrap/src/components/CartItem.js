import React from 'react'
import { Button } from 'react-bootstrap'



const CartItem = ({title,imageUrl,price}) => {
  return (
    <div>
        <span> <img src={imageUrl} /> </span>
        <span> {title} </span>
        <span> {price} </span>
        <span>
            <Button>REMOVE</Button>
        </span>
    </div>
  )
}

export default CartItem
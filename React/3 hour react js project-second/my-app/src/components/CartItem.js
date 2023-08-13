import React from 'react'

const CartItem = (props) => {
  return (
    <div>
       <span>{props.name}</span>
       <span>{props.large}L</span>
       <span>{props.medium}M</span>
       <span>{props.price}Rs/-</span>
    </div>
  )
}

export default CartItem
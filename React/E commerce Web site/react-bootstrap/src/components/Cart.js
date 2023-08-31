import React from 'react'
import CartItem from './CartItem'


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
const Cart = () => {
    const cartElementsList = cartElements.map((cartElement)=>
     <CartItem 
     title = {cartElement.title} 
     price={cartElement.price} 
     imageUrl={cartElement.imageUrl} 
     quantity = {cartElement.quantity}
     />
    )
  return (
    <div>
       <ul>{cartElementsList}</ul>
    </div>
  )
}

export default Cart
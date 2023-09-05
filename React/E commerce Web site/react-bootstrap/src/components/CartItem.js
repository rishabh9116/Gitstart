import React from 'react'
import { Button } from 'react-bootstrap'
import Card from './UI/Card'


const CartItem = ({title,imageUrl,price}) => {
  return (
    <Card>
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
      <span> <img height="150px" src={imageUrl} /> </span>
        <span style={{fontFamily:"Arial" , fontSize:"20px"}}> {title} </span>
        <span style={
          {
            fontFamily:"Arial",
            fontSize:"20px"
          }
        }>${price}</span>
        <span>
            <Button>REMOVE</Button>
        </span> 
      </div>
       
    </Card>
  )
}

export default CartItem
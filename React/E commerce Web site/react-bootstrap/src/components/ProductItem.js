import React from 'react'
import { Button } from 'react-bootstrap'

const ProductItem = ({title,price,imageUrl}) => {
  return (
    <div>
     <div>{title}</div>
    <div>
        <img src={imageUrl} />
    </div>
     <div>
        <span>{price}</span>
        <Button>ADD TO CART</Button>
     </div>
    </div>
  )
}

export default ProductItem
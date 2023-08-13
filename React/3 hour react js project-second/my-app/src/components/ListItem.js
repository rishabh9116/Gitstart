import React from 'react'

const ListItem = (props) => {
  return (
    <li>
   <span>{props.name}</span>
   <span>{props.description}</span>
   <span>{props.price}</span>
   <button>Buy Large({props.large})</button>
   <button>Buy Medium({props.medium})</button>
   <button>Buy Small({props.small})</button>

   </li>
  )
}

export default ListItem
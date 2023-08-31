import React from 'react'

const NavBarCartButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick} >cart</button>
    </div>
  )
}

export default NavBarCartButton
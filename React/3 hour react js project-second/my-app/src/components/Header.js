import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
        
        <div>
            <label>TshirtName</label>
            <br />
            <input></input>
        </div>
        <div>
            <label>Description</label>
            <br />
            <input></input>
        </div>
        <div>
            <label>Price</label>
            <br />
            <input></input>
        </div>
        <div>
            <label>L</label>
            <br />
            <input></input>
        </div>
        <div>
            <label>M</label>
            <br />
            <input></input>
        </div>
        <div>
            <label>S</label>
            <br />
            <input></input>
        </div>

          <button>Add Product</button>
    </div>
  )
}

export default Header
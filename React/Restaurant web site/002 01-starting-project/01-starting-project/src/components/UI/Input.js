import React, { useState } from 'react'
import classes from './Input.module.css'



const Input = (props) => {

   
 
const changeHandler = (event) =>{

    props.getNumber(event.target.value);
}

  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} onChange={changeHandler} />
    </div>
  )
}

export default Input;
import React, { useContext, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/CartContext'

const MealItemForm = () => {
  const Ctx = useContext(CartContext);
  // const [value,setValue] = useState(1);

  const getItemsNumber = () =>{
    // setValue(val); 
  }

const clickHandler = (e) => {
  e.preventDefault();
  console.log("In MealItemForm button clicked");
  Ctx.addItem("a");

}



  return (
   <form className={classes.form}>
    <Input label="Amount" input ={{
      id: 'amount',
      type: 'number',
      min : '1',
      max: '5',
      step:'1',
      defaultValue: '1'
    }}  getNumber= {getItemsNumber}/>
       <button onClick={clickHandler} >+ Add</button>
   </form>
  )
}

export default MealItemForm
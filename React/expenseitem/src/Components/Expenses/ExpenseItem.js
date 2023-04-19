import React from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate.js'
import ExpenseDetails from './ExpenseDetails'
const ExpenseItem = (props) => {
const clickHandler = () => {
  console.log('Clicked!!!!');
}
const deleteHandler = (event) =>{
  
}
  return (
    <Card className='expense-item'>

     <ExpenseDate date ={props.date} />

     <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
     
     <button onClick={clickHandler}>Change Title</button>
     <button onClick={deleteHandler}>Delete Expense</button>
  </Card>
  )
}

export default ExpenseItem;
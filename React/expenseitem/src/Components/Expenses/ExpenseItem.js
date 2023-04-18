import React from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate.js'
import ExpenseDetails from './ExpenseDetails'
const ExpenseItem = (props) => {


  return (
    <Card className='expense-item'>

     <ExpenseDate date ={props.date} />

     <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />

  </Card>
  )
}

export default ExpenseItem;
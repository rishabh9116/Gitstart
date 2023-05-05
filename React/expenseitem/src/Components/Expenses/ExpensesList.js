import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
const ExpensesList = (props) => {
    
  if(props.items.length === 0) {
    return <h2 className='expenses-list__fallback'> No expenses found</h2>
  }
  let singleEle;
  if(props.items.length === 1) {
    singleEle = <h2>Only single Expense here. Please add more...</h2>;
  }
  return (
    <ul className='expenses-list'>
    {props.items.map(expen => <ExpenseItem  key = {expen.id} title={expen.title} amount={expen.amount}
      date={expen.date} />)}
      {singleEle}
    </ul>
  )
}

export default ExpensesList;
import React, { useState } from 'react'

const ExpenseForm = (props) => {
 

  const [enteredtitle,setTitle] = useState('');
  const [enteredAmount,setAmount] = useState(0);
  const [enteredDate,setDate] = useState('2019-01-01');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  }
  
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredtitle}  onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
        <label>Amount</label>
        <input value={enteredAmount} type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>


  )
}

export default ExpenseForm;
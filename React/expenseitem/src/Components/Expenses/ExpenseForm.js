import React, { useState } from 'react'

const ExpenseForm = (props) => {
 

  // const [enteredTitle,setTitle] = useState('');
  // const [enteredAmount,setAmount] = useState('');
  // const [enteredDate,setDate] = useState('');
 const [userInput,setUserInput] =useState({
  enteredTitle:'',
  enteredAmount:'',
  enteredDate:''
}

)



const submitHandler = (event) => {
  event.preventDefault();
  console.log(userInput);
}

  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value,
    // }) 
    setUserInput((prevState) => {
      return {
        ...prevState, enteredTitle:event.target.value
      };
    })
  }

  const amountChangeHandler = (event) => {
    // setAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount:event.target.value,
    }) 
  }

  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate:event.target.value,
    }) 
  }
  
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
        <label>Amount</label>
        <input  type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' onClick={submitHandler}>Add Expense</button>
      </div>
    </form>


  )
}

export default ExpenseForm;
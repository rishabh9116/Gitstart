import React from 'react'

const ExpenseForm = (props) => {
    function changeHandler(event) {
        console.log(event.target.value);
    }
  return (
    <div>
        <input  onChange={changeHandler} placeholder='Create Title'></input>
        <input onChange={changeHandler} placeholder='Enter Amount'></input>
        <input onChange={changeHandler} placeholder='Enter Date'></input>
        <button>Add</button>
    </div>
  )
}

export default ExpenseForm;
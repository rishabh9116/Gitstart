import React,{useState} from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate.js'
import ExpenseDetails from './ExpenseDetails'


const ExpenseItem = (props) => {
  const [title,setTitle]  = useState(props.title);
  const [amount,setAmount] = useState(props.amount);
  
const clickHandler = () => {
  setTitle('Updated')
  console.log('Clicked!!!!');
}
const deleteHandler = (event) =>{
  
}

function changeAmountHandler() {
  setAmount(100);
}
  return (
   <div>

     <ExpenseDate date ={props.date} />

     {/* <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} /> */}
    <div >{title}</div> 
    <div>${amount}</div>
     <button onClick={clickHandler}>Change Title</button>
     <button onClick={deleteHandler}>Delete Expense</button>
     <button onClick={changeAmountHandler}>Change amount</button>
  </div>
  )
}

export default ExpenseItem;
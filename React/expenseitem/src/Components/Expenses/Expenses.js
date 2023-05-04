import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const newExpen = props.items.filter(expense => expense.date.getFullYear()==filteredYear  );
  return (
    <div >
      <h2>Let's get started</h2>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}
        date={expense.date} />)} */}
        
        {newExpen.map(expen => <ExpenseItem  key = {expen.id} title={expen.title} amount={expen.amount}
        date={expen.date} />)}
    </div>
  )
}

export default Expenses;
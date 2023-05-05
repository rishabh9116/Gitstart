import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
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
     
        {/* {newExpen.length===0 ? (<p>No expenses found.</p>) : (newExpen.map(expen => <ExpenseItem  key = {expen.id} title={expen.title} amount={expen.amount}
        date={expen.date} />))} */}
        <ExpensesChart expenses={newExpen} />
      <ExpensesList  items={newExpen} />

    </div>
  )
}

export default Expenses;
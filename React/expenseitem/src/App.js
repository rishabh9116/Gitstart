import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ExpenseItem from './Components/Expenses/ExpenseItem';
import Expenses from './Components/Expenses/Expenses';
import ExpenseForm from './Components/Expenses/ExpenseForm';
import NewExpense from './Components/Expenses/NewExpense';

  const DUMMY_EXPENSES =[
  {id:'e1',
   title: 'Toilet Paper',
   amount: 294.67,
   date:new Date(2020,8,19),
   location: 'Delhi'
  },
  {id:'e2',
  title: 'New TV',
  amount: 799.49,
  date:new Date(2022,2,12),
  location: 'Mumbai'
},
  { id:'e3',
   title: 'Car Insurance',
   amount: 294.67,
   date:new Date(2019,2,28),
   location: 'Kolkata'
  },
  {id:'e4',
   title: 'New Desk (Wooden)',
   amount: 450,
   date:new Date(2020,5,12),
   location: 'Coimbatore'
  },
  
];

const App = () => {
const[expenses,setExpenses] =  useState(DUMMY_EXPENSES);

const addExpenseHandler = (expense) => {
   
  setExpenses((prevExpenses) => {
    return [expense , ...prevExpenses];
  });

};

  return (
    <div className="App">
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses  items={expenses} />
    </div>
  );
}

export default App;

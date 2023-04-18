import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/Expenses/ExpenseItem';
import Expenses from './Components/Expenses/Expenses';

function App() {
  const expenses =[
  {id:'e1',
   title: 'Toilet Paper',
   amount: 294.67,
   date:new Date(2021,8,19),
   location: 'Delhi'
  },
  {id:'e2',
  title: 'New TV',
  amount: 799.49,
  date:new Date(2021,2,12),
  location: 'Mumbai'
},
  { id:'e3',
   title: 'Car Insurance',
   amount: 294.67,
   date:new Date(2021,2,28),
   location: 'Kolkata'
  },
  {id:'e4',
   title: 'New Desk (Wooden)',
   amount: 450,
   date:new Date(2021,5,12),
   location: 'Coimbatore'
  },
  
];
  return (
    <div className="App">
     <Expenses items={expenses}/>

    </div>
  );
}

export default App;

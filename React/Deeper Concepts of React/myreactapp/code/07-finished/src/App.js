import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const[flag,setFlag] = useState(true);
  const[buttonTitle,setButtonTitle] = useState('Descending');
  
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

    const changeOrderHandler = () => {
      if(flag){
        setButtonTitle('Ascending');
      }
      else{
        setButtonTitle('Descending');
      }
     setFlag(!flag);
    };

  return (
    <div className="app">
      <DemoList flag={flag} title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>change to {buttonTitle} order</Button>
    </div>
  );
}

export default App;

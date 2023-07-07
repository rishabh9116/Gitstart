import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { flag, items } = props;
let sortedList;
 if(flag){
  sortedList = items.sort((a, b) => a - b);
 }
 else{
  sortedList = items.sort((a, b) =>  b - a);
 }
  

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);

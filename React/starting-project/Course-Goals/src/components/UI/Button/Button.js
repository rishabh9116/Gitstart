import React from 'react';

import './Button.css';

const Button = props => {
  const check = props.val;
  return (
    <button type={props.type} className={`button ${!check ? 'invalid':''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

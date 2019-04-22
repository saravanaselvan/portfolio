import React from 'react';
import './CalcButton.css';

const CalcButton = (props) => {
  return (
    <button id={props.id} style={{flexGrow: props.flexGrow}} onClick={props.updateOutput} value={props.children}>{props.children}</button>
  )
}

export default CalcButton;
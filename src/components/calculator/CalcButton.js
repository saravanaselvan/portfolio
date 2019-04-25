import React from 'react';
import styles from './CalcButton.module.css';

const CalcButton = (props) => {
  return (
    <button className={styles.button} id={props.id} style={{flexGrow: props.flexGrow}} onClick={props.updateDisplay} value={props.children}>{props.children}</button>
  )
}

export default CalcButton;
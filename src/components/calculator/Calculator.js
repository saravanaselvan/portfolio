import React, { Component } from "react";
import "./Calculator.css";
import CalcButton from "./CalcButton";

class Calculator extends Component {

  state = {
    display: '',
    operator: '',
    previousValue: '',
    currentValue: '',
    result: 0,
    newValue: false
  }
  updateDisplay = (event) => {
    let display = `${this.state.display}${event.target.value}`;
    if(this.state.newValue) {
      display = event.target.value;
    }
    this.setState({ display, previousValue: parseFloat(display), newValue: false });
  }

  add = () => {
    let currentValue = this.state.currentValue;
    if(isNaN(parseFloat(this.state.currentValue))) {
      currentValue = 0;
    }
    let calculatedValue = currentValue + this.state.previousValue;
    this.setState({ 
      display: calculatedValue.toString(), 
      previousValue: this.state.previousValue, 
      currentValue: calculatedValue, 
      newValue: true,
      operator: 'add'
    });
  }

  multiply = () => {
    let currentValue = this.state.currentValue;
    if(isNaN(parseFloat(this.state.currentValue))) {
      currentValue = 1;
    }
    let calculatedValue = currentValue * this.state.previousValue;
    this.setState({ 
      display: calculatedValue.toString(), 
      previousValue: this.state.previousValue, 
      currentValue: calculatedValue, 
      newValue: true,
      operator: 'multiply'
    });    
  }

  equals = () => {
    switch (this.state.operator) {
      case 'add':
        this.add();
        break;
      case 'multiply':
        this.multiply();
        break;        
      default:
        break;
    }
  }
  backspace = () => {
    let display = this.state.display;
    this.setState({     
      display: '',
      operator: '',
      previousValue: '',
      currentValue: '',
      result: 0,
      newValue: false 
    });
  }

  render() {
    const row1 = [ 
      {id: 'seven', text: '7'},
      {id: 'eight', text: '8'},
      {id: 'nine', text: '9'},
      {id: 'multiply', text: 'x', clickHandler: this.multiply},
    ];
  
    const row2 = [ 
      {id: 'four', text: '4'},
      {id: 'five', text: '5'},
      {id: 'six', text: '6'},
      {id: 'minus', text: '-'},
    ];
  
    const row3 = [ 
      {id: 'one', text: '1'},
      {id: 'two', text: '2'},
      {id: 'three', text: '3'},
      {id: 'plus', text: '+', clickHandler: this.add},
    ];
  
    const row4 = [
      {id: 'zero', text: '0'},
      {id: 'backspace', text: '\u2190', clickHandler: this.backspace},
      {id: 'dot', text: '.'},
      {id: 'equal', text: '=', clickHandler: this.equals}
    ];

    return (
      <div className="calc-container">
        <div className="output">
          {this.state.display}
        </div>
        <div className="buttons">
          <div className="row">
            {
              row1.map((row) => {
                return (
                  <CalcButton id={row.id} key={row.id} updateDisplay={row.clickHandler ? row.clickHandler : this.updateDisplay}>{row.text}</CalcButton>
                )
              })
            }
          </div>
          <div className="row">
          {
              row2.map((row) => {
                return (
                  <CalcButton id={row.id} key={row.id} updateDisplay={row.clickHandler ? row.clickHandler : this.updateDisplay}>{row.text}</CalcButton>
                )
              })
            }
          </div>
          <div className="row">
          {
              row3.map((row) => {
                return (
                  <CalcButton id={row.id} key={row.id} updateDisplay={row.clickHandler ? row.clickHandler : this.updateDisplay}>{row.text}</CalcButton>
                )
              })
            }
          </div>
          <div className="row">
          {
              row4.map((row) => {
                return (
                  <CalcButton id={row.id} key={row.id} flexGrow={row.flexGrow} updateDisplay={row.clickHandler ? row.clickHandler : this.updateDisplay}>{row.text}</CalcButton>
                )
              })
            }
          </div>        
        </div>
      </div>
    );
  }
};

export default Calculator;

import React, { Component } from "react";
import "./Calculator.css";
import CalcButton from "./CalcButton";

class Calculator extends Component {

  state = {
    output: '',
    newInput: false,
    input: 0,
    operator: ''
  }
  updateOutput = (event) => {
    if (this.state.output.length === 15) {
      return;
    }
    let output = this.state.output;
    if(this.state.newInput) {
      output = '';
      this.setState({ newInput: false });
    }
    let display = `${output}${event.target.value}`;
    this.setState({output: display});
  }

  add = () => {
    const result = parseFloat(this.state.input) + parseFloat(this.state.output);
    this.setState({ newInput: true, output: result.toString(), input: result.toString(), operator: 'add' });
  }

  multiply = () => {
    const output  = this.state.output || 1;
    let input = 1;
    if(this.state.input > 0 ) {
      input = this.state.input;
    }
    const result = parseFloat(input) * parseFloat(output);
    this.setState({ newInput: true, output: result.toString(), input: result.toString(), operator: 'multiply' });    
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
    let output = this.state.output;
    this.setState({ output: output.slice(0, output.length - 1) });
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
          {this.state.output}
        </div>
        <div className="buttons">
          <div className="row">
            {
              row1.map((row) => {
                return (
                  <CalcButton id={row.id} key={row.id} updateOutput={row.clickHandler ? row.clickHandler : this.updateOutput}>{row.text}</CalcButton>
                )
              })
            }
          </div>
          <div className="row">
          {
              row2.map((row) => {
                return (
                  <CalcButton id={row.id} key={row.id} updateOutput={row.clickHandler ? row.clickHandler : this.updateOutput}>{row.text}</CalcButton>
                )
              })
            }
          </div>
          <div className="row">
          {
              row3.map((row) => {
                return (
                  <CalcButton id={row.id} key={row.id} updateOutput={row.clickHandler ? row.clickHandler : this.updateOutput}>{row.text}</CalcButton>
                )
              })
            }
          </div>
          <div className="row">
          {
              row4.map((row) => {
                return (
                  <CalcButton id={row.id} key={row.id} flexGrow={row.flexGrow} updateOutput={row.clickHandler ? row.clickHandler : this.updateOutput}>{row.text}</CalcButton>
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

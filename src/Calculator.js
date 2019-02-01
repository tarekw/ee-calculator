import React, { Component } from 'react';
import './calculator.css';

const operators = {
  DIVIDE: '/',
  MULTIPLY: '*',
  SUBTRACT: '-',
  ADD: '+',
  EQUAL: '=',
  BACKSPACE: '<'
};

const symbols = {
  [operators.DIVIDE]: '÷',
  [operators.MULTIPLY]: '×',
  [operators.BACKSPACE]: '←'
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      left: null,
      operator: null
    };

    this.doCalculation = {
      [operators.DIVIDE]: (left, right) => left / right,
      [operators.MULTIPLY]: (left, right) => left * right,
      [operators.ADD]: (left, right) => left + right,
      [operators.SUBTRACT]: (left, right) => left - right,
    };
  }

  handleNumberClick = (e) => {
    const digit = e.target.value;
    const { display } = this.state;
  
    this.setState({
      display: display === '0' ? digit : display + digit
    });
  }

  handleOperatorClick = (e) => {
    const newOperator = e.target.value;
    const { display, left, operator } = this.state;

    if (newOperator === operators.EQUAL && operator !== null) {
      const op = (symbols[operator] || operator)
      const right = parseFloat(display.split(op)[1]);
      const result = this.doCalculation[operator](left, right);
      this.setState({
        display: String(result),
        left: result 
      });
    } else {
      this.setState({
        display: display + (symbols[newOperator] || newOperator),
        left: parseFloat(display),
        operator: newOperator
      });
    }
  }

  handleAllClear = () => {
    this.setState({
      display: '0',
      left: null,
      operator: null
    });
  }

  handleDecimalClick = (e) => {
    // TODO
  }

  handleBackspace = (e) => {
    // TODO
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator-display">{this.state.display}</div>
        
        <div className="calculator-buttons">

          <button type="button" className="button" onClick={this.handleAllClear}>AC</button>
          <button type="button" className="button" onClick={this.handleBackspace}>{symbols[operators.BACKSPACE]}</button>
          <button type="button" className="button" onClick={this.handlePercent}>%</button>
          <button type="button" className="button operator" onClick={this.handleOperatorClick} value={operators.DIVIDE}>{symbols[operators.DIVIDE]}</button>

          <button type="button" className="button" onClick={this.handleNumberClick} value="7">7</button>
          <button type="button" className="button" onClick={this.handleNumberClick} value="8">8</button>
          <button type="button" className="button" onClick={this.handleNumberClick} value="9">9</button>
          <button type="button" className="button operator" onClick={this.handleOperatorClick} value={operators.MULTIPLY}>{symbols[operators.MULTIPLY]}</button>

          <button type="button" className="button" onClick={this.handleNumberClick} value="4">4</button>
          <button type="button" className="button" onClick={this.handleNumberClick} value="5">5</button>
          <button type="button" className="button" onClick={this.handleNumberClick} value="6">6</button>
          <button type="button" className="button operator" onClick={this.handleOperatorClick} value={operators.SUBTRACT}>-</button>

          <button type="button" className="button" onClick={this.handleNumberClick} value="1">1</button>
          <button type="button" className="button" onClick={this.handleNumberClick} value="2">2</button>
          <button type="button" className="button" onClick={this.handleNumberClick} value="3">3</button>
          <button type="button" className="button operator" onClick={this.handleOperatorClick} value={operators.ADD}>+</button>

          <button type="button" className="button number-zero" onClick={this.handleNumberClick} value="0">0</button>
          <button type="button" className="button decimal" onClick={this.handleDecimalClick} value=".">.</button>
          <button type="button" className="button operator" onClick={this.handleOperatorClick} value={operators.EQUAL}>
            <div className="equal-sign"/>
          </button>

        </div>
      </div>
    );
  }
}

export {
  Calculator as default,
  operators,
  symbols
};

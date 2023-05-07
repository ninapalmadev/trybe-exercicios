import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  
    this.state = {
      btnOne: 0,
      btnTwo: 0,
      btnThree: 0,
    }
  }

  handleButtonOne = () => {
    this.setState((stateFirst) => ({
      btnOne: stateFirst.btnOne + 1,
    }))
  }

  handleButtonTwo = () => {
    this.setState((stateFirstTwo) => ({
      btnTwo: stateFirstTwo.btnTwo + 1,
    }))
  }

  handleButtonThree = () => {
    this.setState(({btnThree}) => ({
      btnThree: btnThree+1,
    }))
  }

  render() {
  const {btnOne, btnTwo, btnThree} = this.state;

  return (
    <div>
      <button
        type="button"
        onClick={ this.handleButtonOne }
      >
        {`Cliques botão 1: ${btnOne}`}
      </button>
      <button
        type="button"
        onClick={ this.handleButtonTwo }
      >
        {`Cliques botão 2: ${btnTwo}`}
      </button>
      <button
        type="button"
        onClick={ this.handleButtonThree }
      >
        {`Cliques botão 3: ${btnThree}`}
      </button>
    </div>
  );
  }

}

export default App;

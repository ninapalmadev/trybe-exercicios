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
    const { btnOne } = this.state;
    this.setState((stateFirst) => ({
      btnOne: stateFirst.btnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(btnOne)}`);
    });
  }

  handleButtonTwo = () => {
    const { btnTwo } = this.state;
    this.setState((stateFirstTwo) => ({
      btnTwo: stateFirstTwo.btnTwo + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(btnTwo)}`);
    });
  }

  handleButtonThree = () => {
    const {btnThree } = this.state;
    this.setState(({btnThree}) => ({
      btnThree: btnThree+1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(btnThree)}`);
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
  const {btnOne, btnTwo, btnThree} = this.state;

  return (
    <div>
      <button
        type="button"
        onClick={ this.handleButtonOne }
        style={ { backgroundColor: this.getButtonColor(btnOne) } }
      >
        {`Cliques botão 1: ${btnOne}`}
      </button>
      <button
        type="button"
        onClick={ this.handleButtonTwo }
        style={ { backgroundColor: this.getButtonColor(btnTwo) } }
      >
        {`Cliques botão 2: ${btnTwo}`}
      </button>
      <button
        type="button"
        onClick={ this.handleButtonThree }
        style={ { backgroundColor: this.getButtonColor(btnThree) } }
      >
        {`Cliques botão 3: ${btnThree}`}
      </button>
    </div>
  );
  }

}

export default App;

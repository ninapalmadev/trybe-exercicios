// função

function greeting(name, lastName) {
  return `Hello, ${name} ${lastName}`;
}
console.log(greeting('Samuel', 'Silva'));

// props
import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name, lastName } = this.props;
    return <h1>Hello, {name} {lastName}</h1>;
  }
}

// export default Greeting

//chamando o componente no App

import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <main>
        <Greeting name="Samuel" lastName="Silva" />
        {/* // const props = { name: 'Samuel', lastName: 'Silva' } */}
      </main>
    );
  }
}

export default App;





import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick = () => {
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;


//USANDO BIND

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super()
//     // A função abaixo vincula "manualmente" o `this` à nossa função
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
//     Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
//     e tudo o mais daqui de dentro */
//     console.log(this)
//     console.log('Clicou!')
//   }

//   render() {
//     return <button onClick={this.handleClick}>Meu botão</button>
//   }
// }

// export default App;


// function fora da class

// import React from 'react';
// import './App.css';

// /* Embora isso funcione, essa DEFINITIVAMENTE
// não é a maneira correta de se criar eventos
// em React! A função se refere ao componente,
// então deve ser parte de sua classe! */
// function handleClick() {
//   console.log('Clicou no botão!')
// }

// class App extends React.Component {
//   /* Repare que, diferentemente do HTML, no
//   JSX você associa uma função a um evento
//   passando a própria função entre chaves `{}` */
//   render() {
//     return <button onClick={handleClick}>Meu botão</button>
//   }
// }

// export default App;


//COM COMPONENTE
// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
//     super()

//     // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
//   }


//   handleClick() {
//     console.log('Clicou!')
//   }

//   render() {
//     /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
//     através da sintaxe `this.minhaFuncao` para usá-la num evento */
//     return (
//     <>
//       <button type="button" onClick={this.handleClick}>Meu botão</button>;
//       <span>Meu componente!</span>
//     </>
//     )
//   }
// }

// export default App;
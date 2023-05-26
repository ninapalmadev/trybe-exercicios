import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;

// Qual é o nome do componente declarado acima? Image

// Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem ou o texto: Cute cat staring, caso a imagem não consiga ser carregada. < Image source="./assets/cat-2083492_1280.jpg" alternativeText="Cute cat staring"/>
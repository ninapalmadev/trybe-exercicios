const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([name, marca, ano]) => ({
  name, 
  marca, 
  ano
});

console.log(toObject(['Palio', 'Fiat', 2019]));
// parte 1

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
};

imprimeIdade();

// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
const pessoa = {
  nome: 'Henri',
  idade: 20
}
// pessoa = {
//     nome: 'Luna',
//     idade: 19
// } // Altere essa estrutura para corrigir o erro.

pessoa.nome = 'Luna';
pessoa.idade = 19;

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

const name1 = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name1} ${lastName}!`);

function soma(a, b) {
  let resultado = a + b;
  return resultado;
}

let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

const numeroAleatorio = () =>  Math.random();
console.log(numeroAleatorio());

const hello = nome => `Olá, ${nome}!`
let nome = 'Ivan';
console.log(hello(nome));
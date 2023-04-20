// As funções some e every são parecidas e retornam valores booleanos.
// A função some retorna true se ao menos um elemento de um array satisfaz a uma condição. Já o every retorna true se todos os elementos de um array satisfazem a uma condição.

const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

console.log(verificaCargo); // true

//Portanto, tenha em mente que o some só retorna true caso encontre algum elemento que satisfaça à condição. Caso contrário, retorna false.

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false

// O código acima mostra a função verifyFirstLetter, que recebe como primeiro parâmetro letter, que é a letra desejada, e como segundo parâmetro o array chamado listNames.

// Dentro da função verifyFirstLetter, é executado o some para verificar se a primeira letra do nome atual (name[0]) da iteração é igual à letra desejada (letter).

// Ao verificar se existe um nome que começa com a letra J, o retorno é true. Isso significa que existe um nome que começa com a letra J. Já ao verificar se existe um nome que inicia com X, o retorno é false, pois não existe nenhum nome que inicie com X.

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false

console.log(verifyGrades);
// Vamos analisar a função acima?
// A variável verifyGrades é responsável por salvar a lógica;
// Ao utilizar o Object.values, o retorno será um array com os valores das chaves do objeto grades como ['Aprovado', 'Reprovado', 'Aprovado'];
// Então o every executa a callback para cada um dos itens do array e verifica se todos eles possuem o texto 'Aprovado';
// O retorno é false, pois nem todos os valores das chaves do objeto grades são iguais a 'Aprovado'.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, age) => {
  return arr.every((idade) => idade.age >= age);
}

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
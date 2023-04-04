// MODIFICA O ARRAY ORIGINAL e deixa ordenado

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// PARA ORDENAR ARRAYS COM NUMEROS: 
const inventory1 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory1.sort((a, b) => a - b); // <- IMPORTANTE
console.log(inventory1); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// troca a operação para b - a
inventory.sort((a, b) => b - a);
console.log(inventory); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


//ORDENAR EM ORDEM CRESCENTE

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age);

console.log(people);

//ORDENAR EM ORDEM DECRESCENTE

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people2.sort((a, b) => b.age - a.age);

console.log(people2);

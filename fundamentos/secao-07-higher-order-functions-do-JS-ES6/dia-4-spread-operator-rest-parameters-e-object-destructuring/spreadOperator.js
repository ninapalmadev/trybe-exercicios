//O que o spread faz é espalhar os elementos, tanto de arrays quanto de objetos, e inserir informações novas sem alterar o array ou objeto original. Sua sintaxe é caracterizada por três pontos (...).
// Utilizando spread em arrays
// A sintaxe do spread para utilizar em arrays é composta por:

// uma variável, que vai salvar o novo array;
// os colchetes, que caracterizam que é um array;
// os três pontos ..., que caracterizam que uma informação está sendo espalhada. Nesse caso, o array original;
// o elemento a ser adicionado.
// Observe como fica a sintaxe do spread em arrays:

// const variavel = [...arrayOriginal, itemParaAdicionar];

const items = ['Camiseta', 'Carregador', 'Chinelo'];

const newItems = [...items, 'Meia'];

console.log(newItems); // ['Camiseta', 'Carregador', 'Chinelo', 'Meia'];

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

// //EM OBJETOS
// const product = {
//   id: 1,
//   name: 'Camiseta',
// };

// // adiciona a chave `price` com o valor `23`
// const newProduct = { ...product, price: 23 };

// console.log(newProduct); // {id: 1, name: 'Camiseta', price: '23'}

const product = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
price: 23
}

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct = { ...product, ...productPrice };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: 23}

console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800
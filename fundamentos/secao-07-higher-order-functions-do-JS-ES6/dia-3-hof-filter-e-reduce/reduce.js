//Diferente das outras HOFs, o reduce recebe dois parâmetros: o primeiro é uma callback, e o segundo parâmetro é um valor inicial (que é opcional).
// array.reduce(callback, valorInicial);

// O valorInicial é o valor da primeira iteração e, em geral, ao realizar somas, esse valor é 0.
// Já a callback é a função que vai passar por cada um dos itens do array, e ela pode receber até 4 parâmetros, sendo eles:
// Acumulador: que é o valor que vai ser acumulado a cada iteração;
// Valor atual: que é o valor atual do item, a ser adicionado no acumulador;
// Index atual: que é o index do item que está sendo iterado naquele momento;
// Array: que é o array original.

//array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial);
//Dos 4 parâmetros que a callback pode receber, apenas dois são obrigatórios: o acumulador e o valor atual.

// Os parâmetros acumulador e valor atual em geral são escritos em inglês e abreviados. Sendo assim:

// o acumulador é chamado de acc (accumulator);
// o valor atual é chamado de curr (current value).
// Temos então que acc, abreviatura de accumulator, ou acumulador, deve obrigatoriamente ser o primeiro parâmetro da callback, e o curr, abreviatura de currentValue, ou valor atual, também obrigatório, deve ser o segundo parâmetro da callback. Sendo assim, para trabalhar com a função reduce você deve ter algo parecido com o código abaixo
// array.reduce((acc, curr) => {
//   // escopo de execução da função
// }, valorInicial);
//A função do acumulador (acc) é guardar o retorno da callback a cada iteração, e a função do curr é acessar cada um dos valores do array.
const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`acc:`, acc);
  console.log(`curr:`, curr);
  console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);

numbers.reduce((bigger, number) => bigger > number ? bigger : number);

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger);
console.log(bigger); // 85
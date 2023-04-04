const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, index) => {
  pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});

console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((element) => {
  console.log(element * 2); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
});

// MESMA FUNÇÃO MAS EM UMA LINHA
// numbers.forEach((element) => console.log(element * 2));

// Você também pode separar a callback do forEach em uma outra função. Veja o exemplo abaixo:
const multiply = (element) => {
  console.log(element * 2);
}

numbers.forEach(multiply);
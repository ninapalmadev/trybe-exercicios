// const primeNumbers = [17, 23, 37]

// const sum = (a, b) => {
//   console.log(a + b);
// }

// sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const primeNumbers = [17, 23, 37]
const [primeNumber, secondNumber, thirdNumber] = primeNumbers;
const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumber, thirdNumber)

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
console.log(comida, animal, bebida); // arroz gato água
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água


let numerosPares = [1, 3, 5, 6, 8, 10, 12];
console.log(numerosPares); // [6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);
// Utilize array destructuring para produzir o resultado esperado pelo console.log acima


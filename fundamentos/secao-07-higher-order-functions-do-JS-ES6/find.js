// A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada e retorne o primeiro valor do array que corresponda a essa condição. Caso ele não encontre, retorna undefined.

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20); // 18
idades.find((idade) => idade > 50);
idades.find((idade) => idade === 33); // undefined

const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((numero) => (numero % 3 === 0 && numero % 5 === 0)));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((nome) => nome.length === 5));
// const findNameWithFiveLetters = () => {
//   return names.find((name) => name.length === 5);
// };
// console.log(findNameWithFiveLetters()); // Irene


const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(musicas.find((musica) => musica.id === '31031685'));
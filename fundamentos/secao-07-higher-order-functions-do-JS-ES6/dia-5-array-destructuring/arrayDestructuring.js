// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

// Com a desestruturação de array, podemos declarar todas as variáveis contendo os nomes dos países usando apenas uma única linha de código:

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Perceba que, ao invés de declarar uma variável para cada elemento do Array acessando o valor através do index como arrayCountries[0], é possível passar no valor da desestruturação o nome da variável que irá armazenar o valor correspondente àquela posição. Ou seja, a variável firstCountry, passada no primeiro index da desestruturação, armazena o valor presente no index 0 da array desestruturada.


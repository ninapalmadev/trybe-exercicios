const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const filterNumber = numbers.filter((number) => number % 2 === 0);
console.log(filterNumber);

const sum = filterNumber.reduce((acc, curr) => acc + curr)
console.log(sum);

const sumNum = (acc, curr) => (curr % 2 === 0 ? acc + curr : acc);
const nubmer = numbers.reduce(sumNum); 
console.log(nubmer);

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const isEven = (number) => number % 2 === 0;
// const sum = (accumulator, number) => accumulator + number;

// const sumNumbers = (array) => array.filter(isEven).reduce(sum); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152


// usando reduce
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sum = (accumulator, number) => (
//   (number % 2 === 0) ? accumulator + number : accumulator
// );

// const sumNumbers = (array) => array.reduce(sum, 0);

// console.log(sumNumbers(numbers)); // 152
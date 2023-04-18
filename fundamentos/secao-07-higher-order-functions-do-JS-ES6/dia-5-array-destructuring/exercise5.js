const moreStudents = [
  'Chris',
  ['Ahmad', 'Antigoni'],
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);

const products = [
  {
    name: 'laptop',
    price: 1000,
    id: 3,
  },
  {
    name: 'desktop',
    price: 1500,
    id: 2,
  },
  {
    name: 'phone',
    price: 500,
    id: 1,
  },
];

console.log(products.sort((a,b) => b.price - a.price))
// escreva greet abaixo
const greet = (user = 'pessoa usuária', message = 'Hi') => `${message} ${user}`;
// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'
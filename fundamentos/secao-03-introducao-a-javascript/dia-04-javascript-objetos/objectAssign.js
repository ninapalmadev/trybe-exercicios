// Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto-destino e sua estrutura é:

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto-destino.

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);


let person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
};

let info = {
    age: 23,
    job: 'engenheiro',
};

let family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

let person = {
    name: 'Roberto',
};

let lastName = {
    lastName: 'Silva',
};

let clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

let person = {
    name: 'Roberto',
};

let lastName = {
    lastName: 'Silva',
};

let newPerson = Object.assign({}, person, lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
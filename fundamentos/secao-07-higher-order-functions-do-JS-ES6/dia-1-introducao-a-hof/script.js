const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

// O código acima está organizado da seguinte maneira:

// arrayOfValues: nome do array que será percorrido;
// .forEach: a HOF usada. Poderia ser outra HOF, como .find, .some, .every, entre outras, que a estrutura seria a mesma;
// element: valor do elemento do array;
// (element, index) => { /* código */ }: função a ser executada.
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'morango', 'maracujá'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pizza', 'coxinha', 'lasanha'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));        

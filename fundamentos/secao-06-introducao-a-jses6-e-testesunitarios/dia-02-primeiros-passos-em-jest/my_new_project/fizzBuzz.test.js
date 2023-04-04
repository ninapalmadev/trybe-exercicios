const myFizzBuzz = require('./fizzBuzz');

describe('função fizzBuzz verifica se', () => {
  it('conforme o parametro 15, retorna o resultado fizzbuzz' , () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('conforme o parametro 3, retorna o resultado fizz' , () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  it('conforme o parametro 5, retorna o resultado buzz' , () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  it('conforme o parametro diferente de 3 ou 5, retorna o próprio número' , () => {
    expect(myFizzBuzz(2)).toBe(2);
  })
  it('conforme o parametro diferente de 3 ou 5, retorna o próprio número' , () => {
    expect(myFizzBuzz('string')).toBe(false);
  })
})

// Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.


const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({
      "name": "banana", 
      "price": 1.99, 
      "quantity": 20, 
      "unit": "kg"
    })
  });

  it('utiliza zero como quantidade padrão', () => {
    const quantity = 0;
    expect(createItem('banana', 'kg', 1.99)).toEqual({
      "name": "banana", 
      "price": 1.99, 
      "quantity": quantity, 
      "unit": "kg"
    })
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(20, '1kg', 1.99, 'banana')).toThrow();
  });
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});
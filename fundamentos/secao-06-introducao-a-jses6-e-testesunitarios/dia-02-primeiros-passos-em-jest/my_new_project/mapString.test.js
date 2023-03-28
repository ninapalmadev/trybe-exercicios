const { encode, decode } = require('./mapString');

describe('Testa as funções encode e decode', () => {
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('convertendo palavra madonna em numeros m1d4nn1', () => {
    expect(encode('mad4nna')).toEqual('m1d4nn1');
  })
  it('converte elvis em 2lv3s', () => {
    expect(encode('elvis')).toEqual('2lv3s');
  });
  it('converte urubu em 5r5b5', () => {
    expect(encode('urubu')).toEqual('5r5b5');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('confessions').length).toEqual(11);;
  });
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('converte apenas o número 1 na vogal a', () => {
    expect(decode('m1donn1')).toEqual('madonna');
  });
  it('converte apenas o número 2 na vogal e', () => {
    expect(decode('2lvis')).toEqual('elvis');
  });
  it('converte apenas o número 3 na vogal i', () => {
    expect(decode('p3p3')).toEqual('pipi');
  });
  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('5r5b5')).toEqual('urubu');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});


// Teste se encode e decode são funções;
// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
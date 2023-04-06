//Por exemplo, ao trabalhar com funções, você pode se deparar com a necessidade de inserir múltiplos parâmetros para executar um determinado código. Ao utilizar o rest, você consegue agrupar esses argumentos usando a sintaxe de três pontos(...). Observe e execute o código abaixo:

const countParams = (...args) => {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// No exemplo acima, a função sum utiliza a HOF reduce para calcular a soma de todos os argumentos passados a ela, independentemente do número. Como o parâmetro rest “empacota” todos os argumentos em um array, podemos utilizar o reduce para somar tudo o que estiver dentro desse array.

// Experimente passar mais números como argumento para a função sum. Você verá que, independentemente do número de argumentos passados, a função irá executar a soma. Ao utilizar o rest, suas funções podem ficar mais flexíveis quando você precisa passar múltiplos parâmetros, pois não precisa especificar quantos argumentos a função irá receber!

// Anota aí 📝: O spread é responsável por espalhar valores, e ele pode ser utilizado para passar parâmetros ao EXECUTAR uma função. Já o rest pode ser utilizado para agrupar valores ao DECLARAR funções que podem receber múltiplos parâmetros.
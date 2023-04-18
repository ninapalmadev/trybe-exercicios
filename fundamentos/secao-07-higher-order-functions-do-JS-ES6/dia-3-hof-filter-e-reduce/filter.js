//O filter é uma função responsável por realizar algum tipo de filtro no array, de acordo com uma condição.

// O filter faz uma iteração no array e recebe como parâmetro uma callback.
// Relembrando 🧠: Uma callback é uma função que é passada por parâmetro para outra função.
// // Essa callback recebe como primeiro parâmetro o elemento do array: array.filter((item) => {});
// Dentro do escopo da função é onde inserimos a condição a ser filtrada.
// Para refletir 💭: Você precisa filtrar apenas o nome das pessoas do seu array dados. Ele possui dois tipos de informações: o nome, que é do tipo string, e o número de telefone, que é do tipo number. Pensando nisso, como você faria para pegar apenas os elementos do tipo string, que são referentes ao nome das pessoas? 🤔
// Se você pensou no filter, acertou! Você pode realizar a filtragem do array dados e na condição, verificar pelos elementos do tipo string. Copie o código abaixo, execute no terminal do seu navegador e veja o que ele te retorna:

const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

dados.filter((item) => typeof item === 'string');
console.log(dados.filter((item) => typeof item !== 'string'));

const listaNumeros = [10, 20, 30, 40];
listaNumeros.filter((number) => number > 20)
console.log(listaNumeros.filter((number) => number > 20));
// fetch("https://dummyjson.com/quotes/random")
//   .then((response) => response.json())
//   .then((data) => console.log(`${data.quote} | ${data.author}`))
//   .catch((error) => console.log(error))


//Você reparou que usamos dois .then seguidos após fazer o fetch? Esse processo é chamado de encadeamento. Podemos usar esse recurso retornando um valor dentro de um .then. O valor retornado será recebido pelo próximo .then encadeado. No caso acima, estamos retornando o valor de response.json() para o próximo .then, que recebe o valor através da variável data.

fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(`${data.quote} | ${data.author}`))
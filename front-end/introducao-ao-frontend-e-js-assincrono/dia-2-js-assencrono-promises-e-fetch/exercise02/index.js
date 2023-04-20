import './style.css';

const dog = document.querySelector('#dogBtn');
const cat = document.querySelector('#catBtn');
const random = document.querySelector('#surpriseBtn');
const image = document.querySelector('#img');

const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

// dog.addEventListener('click', (event) => {
//   event.preventDefault();

//   fetch(DOG_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       image.src = data.message
//     })
//   // console.log(data.message));
// })

cat.addEventListener('click', (event) => {
  event.preventDefault();

})

fetch('https://aws.random.cat/meow')
  .then((response) => console.log('oi'))
  // .then((data) => console.log(data.file))


import './style.css';

const dog = document.querySelector('#dogBtn');
const cat = document.querySelector('#catBtn');
const random = document.querySelector('#surpriseBtn');
const image = document.querySelector('#img');

const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

dog.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(DOG_URL)
    .then((response) => response.json())
    .then((data) => {
      image.src = data.message
      console.log(data)
    })
});

cat.addEventListener('click', (event) => {
  event.preventDefault();
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    // .then((data) => console.log(data[0].url))
    .then((data) => {
      image.src = data[0].url;
    });
})

random.addEventListener("click", () => {
  Promise.any([
    fetch("https://aws.random.cat/meow"),
    fetch("https://api.thecatapi.com/v1/images/search")
  ])
    .then((response) => response.json())
    .then((data) => {
      image.src = data.message || data[0].url;
    })
});
// fetch('https://api.thecatapi.com/v1/images/search')
//   .then((response) => console.log('oi'))
//   // .then((data) => console.log(data.file))


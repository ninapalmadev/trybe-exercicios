import Swal from 'sweetalert2';
import './style.css';

const img = document.querySelector('#image');
const name = document.querySelector('#heroName');
const button = document.querySelector('#sort');

const URL_Hero = 'https://akabab.github.io/superhero-api/api/id';

const randomId = () => Math.floor(Math.random() * 1000);

button.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  fetch(`${URL_Hero}/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.images.md;
      img.alt = data.name;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});

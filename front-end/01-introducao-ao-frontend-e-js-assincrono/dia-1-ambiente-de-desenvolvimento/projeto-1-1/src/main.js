import validator from 'validator';
import './style.css';

const button = document.querySelector('#button');
const text = document.querySelector('#text');
const selector = document.querySelector('#option');
const message = document.querySelector('#message');

const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(text.value, 'pt-BR'),
    hexColor: validator.isHexColor(text.value),
    email: validator.isEmail(text.value),
    uuid: validator.isUUID(text.value, UUID_VERSION),
    url: validator.isURL(text.value),
  };

  message.innerHTML = `A validação retornou ${campos[selector.value]}`;
});

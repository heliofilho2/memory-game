const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');


const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = () => {
  event.preventDefault();
  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html'

}


form.addEventListener('submit', handleSubmit);
input.addEventListener('input', validateInput);
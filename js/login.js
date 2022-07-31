const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault(); //previne o envio e recarregamento da pag.
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'; //redireciona o user para a pag game
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
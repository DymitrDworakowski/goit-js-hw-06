const input = document.querySelector('#validation-input');
const length = input.dataset.length;

function onInputBlur(event) {
    const value = event.target.value;

if (value.length === +length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
} else {
    input.classList.remove('valid');
    input.classList.add('invalid');
    }
}

input.addEventListener('blur', onInputBlur);
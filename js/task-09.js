function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

function changeColor() {
const color = getRandomHexColor();
document.body.style.backgroundColor = color;
span.textContent = color;
}

btn.addEventListener('click', changeColor);


// span.style.color = `${getRandomHexColor.backgroundColor}`;
 






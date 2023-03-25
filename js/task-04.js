let counterValue = 0;
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  counterValue--;
  value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue++;
  value.textContent = counterValue;
});
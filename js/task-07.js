const controlEl = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

// controlEl.addEventListener('input', onControl);

// function onControl(evt) {
//    span.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;
// }
// console.dir(controlEl.valueAsNumber);
 

controlEl.addEventListener('input', event => {
    console.dir(controlEl.valueAsNumber);
  text.style.fontSize = `${event.target.value}px`;
});



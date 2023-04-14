const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counter = 0;

function increment() {
  counter += 1;
  counterValue.textContent = counter;
}

function decrement() {
  counter -= 1;
  counterValue.textContent = counter;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
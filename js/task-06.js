const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', (event) => {
  const inputText = event.target.value.trim();
  const dataLength = parseInt(event.target.dataset.length);
  if (inputText.length === dataLength) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');}});
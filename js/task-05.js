const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (event) => {
  const inputText = event.target.value.trim();
  nameOutput.textContent = inputText !== '' ? inputText : 'незнайомець';});
const inputAmount = document.querySelector('.inputAmount');
      const btnRender = document.querySelector('.btnRender');
      const btnDestroy = document.querySelector('.btnDestroy');
      const boxesContainer = document.getElementById('boxes');

function renderBoxes() {
    const amount = inputAmount.value;
    const boxes = [];

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxes.push(box);
    };

    boxesContainer.append(...boxes);
  };
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  };
  function getRandomColor() {
    const color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(
      0,
      255
    )}, ${getRandomNumber(0, 255)})`;
    return color;
  };
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


      btnRender.addEventListener('click', renderBoxes);
      btnDestroy.addEventListener('click', destroyBoxes);

     

      
      

      
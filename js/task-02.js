const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  const ingredientsList = document.querySelector('#ingredients');
  
  const ingredientsElements = ingredients.map((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
  });
  
  ingredientsList.append(...ingredientsElements);
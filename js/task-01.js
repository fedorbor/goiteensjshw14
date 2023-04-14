const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`В списке ${categoriesItems.length} категории.`);

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('li').length ; 
  console.log(`Категория: ${categoryName}`);
  console.log(`Количество элементов: ${categoryItemsCount}`);
});
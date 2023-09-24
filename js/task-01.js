// Отримуємо елемент ul#categories
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li.item у списку ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Ітеруємось по кожному елементу li.item
categoryItems.forEach((categoryItem) => {
  // Отримуємо заголовок категорії (тег <h2>)
  const categoryTitle = categoryItem.querySelector('h2');
  
  // Отримуємо всі елементи <li> у даній категорії
  const categoryElements = categoryItem.querySelectorAll('ul li');
  
  // Виводимо інформацію про категорію
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});
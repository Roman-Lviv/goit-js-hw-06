
// Отримуємо елемент ul#ingredients
const ingredientsList = document.querySelector('#ingredients');

// Масив рядків інгредієнтів
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Створюємо елементи <li> та додаємо їх до списку ul#ingredients
ingredients.forEach((ingredientText) => {
  // Створюємо новий елемент <li>
  const listItem = document.createElement('li');
  
  // Додаємо текстовий вміст (назву інгредієнта) до <li>
  listItem.textContent = ingredientText;
  
  // Додаємо клас "item" до <li>
  listItem.classList.add('item');
  
  // Додаємо <li> до списку ul#ingredients
  ingredientsList.appendChild(listItem);
});

// В результаті всі інгредієнти будуть вставлені у список ul#ingredients
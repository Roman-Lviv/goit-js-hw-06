function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Отримуємо посилання на елементи з DOM
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо обробник події click до кнопки
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий кольор
  const randomColor = getRandomHexColor();
  
  // Змінюємо фон елемента <body> на випадковий кольор
  document.body.style.backgroundColor = randomColor;
  
  // Виводимо значення кольору в <span class="color">
  colorSpan.textContent = randomColor;
});
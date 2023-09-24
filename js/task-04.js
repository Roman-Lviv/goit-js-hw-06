// Отримуємо елементи з DOM
const counter = document.querySelector("#counter");
const valueSpan = document.querySelector("#value");
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

// Ініціалізуємо змінну для зберігання поточного значення лічильника
let counterValue = 0;

// Додаємо слухача подій для кнопки збільшення значення
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

// Додаємо слухача подій для кнопки зменшення значення
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

// Функція для оновлення значення лічильника у DOM
function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

// Ініціалізуємо початкове значення лічильника
updateCounterValue();

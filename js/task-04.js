// ------------------------------------ ЗАВДАННЯ 4 ----------------------------------------------------------------
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// ------------------------------------ ВИКОНАННЯ ----------------------------------------------------------------

const counter = document.querySelector("#counter");
const valueSpan = document.querySelector("#value");
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

updateCounterValue();

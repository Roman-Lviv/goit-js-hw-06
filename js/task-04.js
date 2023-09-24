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

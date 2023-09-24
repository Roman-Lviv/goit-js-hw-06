// Отримуємо посилання на інпут і спан
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Додаємо обробник події input до інпута
nameInput.addEventListener("input", () => {
  // Отримуємо значення інпута
  const inputValue = nameInput.value.trim(); // Видаляємо зайві пробіли з початку і кінця

  // Перевіряємо, чи інпут порожній
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});

// Отримуємо посилання на інпут
const validationInput = document.querySelector('#validation-input');

// Додаємо обробник події blur до інпута
validationInput.addEventListener('blur', () => {
  // Отримуємо значення інпута та кількість символів, яку має бути в інпуті
  const inputValue = validationInput.value.trim(); // Видаляємо зайві пробіли з початку і кінця
  const expectedLength = parseInt(validationInput.getAttribute('data-length'), 10);

  // Перевіряємо, чи кількість символів відповідає очікуваній кількості
  if (inputValue.length === expectedLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});

// Отримуємо посилання на форму
const loginForm = document.querySelector('.login-form');

// Додаємо обробник події submit до форми
loginForm.addEventListener('submit', function (event) {
  // Запобігаємо перезавантаженню сторінки при відправці форми
  event.preventDefault();

  // Отримуємо значення полів форми
  const formData = new FormData(loginForm);
  const formObject = {};

  // Проходимося по всім елементам форми та зберігаємо їх значення в об'єкт
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  // Перевіряємо, чи всі поля заповнені
  if (!formObject.email || !formObject.password) {
    alert('Please fill in all fields');
  } else {
    // Якщо всі поля заповнені, виводимо об'єкт у консоль
    console.log(formObject);

    // Очищаємо значення полів форми
    loginForm.reset();
  }
});
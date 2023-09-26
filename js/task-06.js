// ------------------------------------ ЗАВДАННЯ 6 ----------------------------------------------------------------

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// ------------------------------------ ВИКОНАННЯ ----------------------------------------------------------------

const validationInput = document.querySelector("#validation-input");

function updateClassBasedOnValidation(isValid) {
  if (isValid) {
    applyClasses("valid", "invalid");
  } else {
    applyClasses("invalid", "valid");
  }
}

function applyClasses(classToAdd, classToRemove) {
  validationInput.classList.remove(classToRemove);
  validationInput.classList.add(classToAdd);
}

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.trim();
  const expectedLength = parseInt(
    validationInput.getAttribute("data-length"),
    10
  );

  const isValid = inputValue.length === expectedLength;
  updateClassBasedOnValidation(isValid);
});

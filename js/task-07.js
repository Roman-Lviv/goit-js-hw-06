// Отримуємо посилання на input і span
const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

// Додаємо обробник події input до input#font-size-control
fontSizeControl.addEventListener('input', () => {
  // Отримуємо поточне значення input#font-size-control
  const fontSize = fontSizeControl.value + 'px';

  // Встановлюємо новий розмір шрифту для span#text
  textSpan.style.fontSize = fontSize;
});
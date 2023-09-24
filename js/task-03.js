const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

// Створіть змінну для зберігання розмітки
let galleryMarkup = '';

// Ітеруйтеся по масиву images та створюйте розмітку для кожного зображення
images.forEach((image) => {
  const { url, alt } = image;
  galleryMarkup += `<li><img src="${url}" alt="${alt}"></li>`;
});

// Додайте зібрану розмітку до ul.gallery за одну операцію
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
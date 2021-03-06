// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('ul#gallery');

// const addImages = images.map(obj => {
//     const liRef = document.createElement('li');
//     const imgRef = document.createElement('img');
//     imgRef.setAttribute('src', `${obj.url}`);
//     imgRef.setAttribute('alt', `${obj.alt}`);
//     liRef.appendChild(imgRef);
//     galleryRef.appendChild(liRef);
//     return galleryRef;
// });

// const addImages = images.map(obj => {
//     galleryRef.insertAdjacentHTML("beforeend", `<li class="gallery__item"><img src="${obj.url}" alt="${obj.alt}"></li>`)
//     return galleryRef;
// });

const addImages = images.map(obj => {
    const imgToAdd = `<li class="gallery__item"><img src="${obj.url}" alt="${obj.alt}"></li>`
    return imgToAdd;
});

galleryRef.insertAdjacentHTML("beforeend", addImages.join(' '));


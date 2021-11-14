// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
    `;
  })
  .join('');
galleryRef.insertAdjacentHTML('beforeend', markUp);

// galleryRef.addEventListener("click", handerImgClick);

new SimpleLightbox('.gallery a', {
  captions: 'alt',
  captionsDelay: 250,
});

console.log(galleryItems);

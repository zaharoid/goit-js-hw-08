import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = makeMarkup(galleryItems);

function makeMarkup(items) {
  return items
    .map(
      item => `<a class="gallery__link" href="${item.original}">
   <img class="gallery__image" src="${item.preview}" alt="" title="${item.description}" />
</a>`
    )
    .join('');
}

gallery.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

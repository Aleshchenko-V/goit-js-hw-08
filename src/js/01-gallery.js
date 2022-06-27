//import s from '../templates/gallery.hbs';
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//console.log(s);

const galleryEl = document.querySelector('.gallery');
const galleryListItems = createGallery(galleryItems);

function createGallery(collection) {
  return collection
    .map(
      ({ preview, original, description }) =>
        `
					<a class="gallery__item" href="${original}">
						<img class="gallery__image" src="${preview}" alt="${description}" />
					</a>
				`
    )
    .join('');
}

function addGalleryToPage(el) {
  galleryEl.insertAdjacentHTML('beforeend', el);
}

addGalleryToPage(galleryListItems);

galleryEl.addEventListener('click', e => {
  e.preventDefault();
  const isGalleryItem = e.target.classList.contains('gallery__image');
  if (!isGalleryItem) {
    return;
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
});

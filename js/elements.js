import {renderBigPhoto } from './modal.js';
import {
  filterDefault,
  filterRandom,
  filterDiscussed
} from './filter.js';

const picturesElement = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content;

const pirctureFragment = document.createDocumentFragment();

picturesElement.appendChild(pirctureFragment);

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    return response.json();
  })
  .then((similarPictures) => {
    const renderPicture = (pictures) => {
      pictures.forEach((photo) => {
        const pictureElement = picture.cloneNode(true);
        document.querySelector('.img-filters').classList.remove('img-filters--inactive');
        pictureElement.querySelector('.picture__img').src = photo.url;
        pictureElement.querySelector('.picture__likes').textContent = photo.likes;
        pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
        picturesElement.appendChild(pictureElement);

        let pictureNode = picturesElement.lastElementChild;
        pictureNode.setAttribute('data-id', photo.id);
        pictureNode.addEventListener('click', (evt) => {
          renderBigPhoto(pictures, evt);
        });
      });
    };
    renderPicture(similarPictures);
    filterDefault(similarPictures, renderPicture);
    filterRandom(similarPictures, renderPicture);
    filterDiscussed(similarPictures, renderPicture);
  })
  .catch((err) => {
    alert(err);
  })

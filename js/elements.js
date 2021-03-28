/* global _:readonly */
import './modal.js';
import {
  filterDefault,
  filterRandom,
  filterDiscussed
} from './filter.js';

const picturesElement = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content;
const RERENDER_DELAY = 500;

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

        pictureNode.setAttribute('data-likes', photo.likes);
        pictureNode.setAttribute('data-comments', photo.comments.length);
        pictureNode.setAttribute('data-avatar', photo.comments[0].avatar);
        pictureNode.setAttribute('data-name', photo.comments[0].name);
        pictureNode.setAttribute('data-message', photo.comments[0].message);
        pictureNode.setAttribute('data-description', photo.description);
      });
    };
    renderPicture(similarPictures);
    filterDefault(similarPictures, _.debounce(renderPicture, RERENDER_DELAY));
    filterRandom(similarPictures, _.debounce(renderPicture, RERENDER_DELAY));
    filterDiscussed(similarPictures, _.debounce(renderPicture, RERENDER_DELAY));
  })
  .catch((err) => {
    alert(err);
  })

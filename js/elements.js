import {createObjs} from './data.js';

const picturesElement = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content;

const similarPictures = createObjs();

const pirctureFragment = document.createDocumentFragment();

similarPictures.forEach((photo) => {
  const pictureElement = picture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  picturesElement.appendChild(pictureElement);
});

picturesElement.appendChild(pirctureFragment);


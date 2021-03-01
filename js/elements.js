import {createObjs} from './data.js';

const picturesElement = document.querySelector('.picture');
const picture = document.querySelector('#picture').content;

const similarPictures = createObjs();

const pirctureFragment = document.createDocumentFragment();

similarPictures.forEach((photo) => {
  const pictureElement = picture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.avatarOfPhoto;
  pictureElement.querySelector('.picture__likes').textContent = photo.likesOfPhoto;
  pictureElement.querySelector('.picture__comments').textContent = photo.commentOfPhoto;
  picturesElement.appendChild(pictureElement);
});

picturesElement.appendChild(pirctureFragment);


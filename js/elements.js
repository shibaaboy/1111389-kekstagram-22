import {createObjs} from './data.js';
import './modal.js';

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
  
  let pictureNode = picturesElement.lastElementChild;
  
  pictureNode.setAttribute('data-likes' , photo.likes);
  pictureNode.setAttribute('data-comments' , photo.comments.length);
  pictureNode.setAttribute('data-avatar' , photo.comments[0].avatar);
  pictureNode.setAttribute('data-name' , photo.comments[0].name);
  pictureNode.setAttribute('data-message' , photo.comments[0].message);
  pictureNode.setAttribute('data-description' , photo.description);
});

picturesElement.appendChild(pirctureFragment);

export {similarPictures};
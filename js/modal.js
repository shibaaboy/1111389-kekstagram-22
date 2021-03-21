const picturesElement = document.querySelector('.pictures');
let popup = document.querySelector('.big-picture');
let closePopup = document.querySelector('.big-picture__cancel');
let body = document.querySelector('body');
let commentCount = document.querySelector('.social__comment-count');
let commentsLoader = document.querySelector('.comments-loader');
let likesCount = document.querySelector('.likes-count');

picturesElement.addEventListener('click', (evt) => {
  let parent = evt.target.parentElement;
  if (parent.classList.contains('picture')) {
    popup.classList.remove('hidden');
    body.classList.add('modal-open');
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    let bigPicture = popup.querySelector('.big-picture__img img');
    bigPicture.src = evt.target.attributes[1].nodeValue;

    let socialPicture = popup.querySelector('.social__picture');
    socialPicture.src = evt.target.parentNode.dataset.avatar;
    socialPicture.alt = evt.target.parentNode.dataset.name;

    let socialText = popup.querySelector('.social__text');
    socialText.textContent = evt.target.parentNode.dataset.message;

    let likes = parent.getAttribute('data-likes');
    likesCount.textContent = likes;

    let socialCaption = popup.querySelector('.social__caption');
    socialCaption.textContent = evt.target.parentNode.dataset.description;
  }
});

closePopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('hidden');
  body.classList.remove('modal-open');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.add('hidden');
  }
});

export {body};

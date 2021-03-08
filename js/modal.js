const picturesElement = document.querySelector('.pictures');
let popup = document.querySelector('.big-picture');
let closePopup = document.querySelector('.big-picture__cancel');
let body = document.querySelector('body');
let commentCount = document.querySelector('.social__comment-count');
let commentsLoader = document.querySelector('.comments-loader');
let likesCount = document.querySelector('.likes-count');


picturesElement.addEventListener('click', (evt) => {
  // console.log(evt.target);
  let parent = evt.target.parentElement;
  popup.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  let bigPicture = popup.querySelector('.big-picture__img img');
  bigPicture.src = evt.target.attributes[1].nodeValue;

  let id = parent.getAttribute('data-id');
  alert(id);

  let likes = parent.getAttribute('data-likes');
  alert(likes);

  likesCount.textContent = likes;

  let comment = parent.getAttribute('data-comments');
  alert(comment);
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
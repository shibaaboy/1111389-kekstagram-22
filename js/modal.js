let popup = document.querySelector('.big-picture');
let closePopup = document.querySelector('.big-picture__cancel');
let body = document.querySelector('body');
let commentCount = document.querySelector('.social__comment-count');
let commentsLoader = document.querySelector('.comments-loader');
let likesCount = document.querySelector('.likes-count');
let socialComments = document.querySelector('.social__comments');

const createComments = (comments) => {
  socialComments.innerHTML = '';
  if (comments) {
    comments.forEach(comments => {
      const newItemElement = document.createElement('li');
      const newImgElement = document.createElement('img');
      const newParagraphElement = document.createElement('p');

      newImgElement.src = comments.avatar;
      newImgElement.alt = comments.name;

      newParagraphElement.textContent = comments.message;

      newItemElement.classList.add('social__comment');
      newImgElement.classList.add('social__picture');
      newParagraphElement.classList.add('social__text');
      newItemElement.appendChild(newImgElement);
      newItemElement.appendChild(newParagraphElement);
      socialComments.appendChild(newItemElement);
    });
  }

  if (comments.length >= 5) {
    let commentsList = socialComments.querySelectorAll('.social__comment');
    commentCount.classList.remove('hidden');
    commentCount.textContent = `${5} из ${commentsList.length} комментариев`;

    for (let i = 0; i < comments.length; i++) {
      if (i >= 5) {
        commentsList[i].classList.add('hidden');
        commentsLoader.classList.remove('hidden');
      }
    }
  }

  if (comments.length <= 5) {
    let hiddenComments = socialComments.querySelectorAll('.social__comment.hidden');
    let commentsList = socialComments.querySelectorAll('.social__comment');
    commentCount.classList.remove('hidden');
    commentCount.textContent = `${commentsList.length} из ${commentsList.length} комментариев`;
    commentsLoader.classList.add('hidden');

    for (let i = 0; i < comments.length; i++) {
      if (hiddenComments[i]) {
        hiddenComments[i].classList.add('hidden');
      }
    }
  }
};

commentsLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  //не знааааююю...
})

const renderBigPhoto = (pictures, evt) => {
  let parent = evt.target.parentElement;
  if (parent.classList.contains('picture')) {
    popup.classList.remove('hidden');
    body.classList.add('modal-open');
    commentCount.classList.add('hidden');

    let id = evt.target.parentNode.dataset.id;
    let dataPhoto;
    for (let i = 0; i < pictures.length; i++) {
      const dataObject = pictures[i];
      if (dataObject.id == id) {
        dataPhoto = Object.assign({}, dataObject);
      }
    }

    let bigPicture = popup.querySelector('.big-picture__img img');
    bigPicture.src = dataPhoto.url;
    likesCount.textContent = dataPhoto.likes;
    let socialCaption = popup.querySelector('.social__caption');
    socialCaption.textContent = dataPhoto.description;
    createComments(dataPhoto.comments);
  }
}

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
    body.classList.remove('modal-open');
    commentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
  }
});

export {
  body,
  popup,
  renderBigPhoto
};

import {uploadFileOpen} from './picture.js';

let imgUploadForm = document.querySelector('.img-upload__form');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const mainBlock = document.querySelector('main');

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  fetch('https://22.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body: formData,
  },
  )
    .then((response) => {
      if (response.ok) {
        alert('220202020202022000');
        const successElement = successTemplate.cloneNode(true);
        mainBlock.appendChild(successElement);
        uploadFileOpen.classList.add('hidden');
        const closeSuccessButton = document.querySelector('.success__button');
        document.addEventListener('click', function (evt) {
          if (evt.target !== successElement) {
            successElement.remove();
          }
        });
        document.addEventListener('keydown', function (evt) {
          if (evt.keyCode === 27) {
            successElement.remove();
          }
        });
        closeSuccessButton.addEventListener('click', function (evt) {
          if (evt.target !== successElement) {
            successElement.remove();
          }
        });
      }
      alert('404404040404044040404');
      const errorElement = errorTemplate.cloneNode(true);
      mainBlock.appendChild(errorElement);
      uploadFileOpen.classList.add('hidden');
      const closeErrorButton = document.querySelector('.error__button');
      document.addEventListener('click', function (evt) {
        if (evt.target !== errorElement) {
          errorElement.remove();
        }
      });
      document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
          errorElement.remove();
        }
      });
      closeErrorButton.addEventListener('click', function (evt) {
        if (evt.target !== errorElement) {
          errorElement.remove();
        }
      });
    })
});

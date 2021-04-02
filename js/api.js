import {
  uploadFileOpen
} from './picture.js';

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
    })
    .then((response) => {
      if (response.ok) {
        const successElement = successTemplate.cloneNode(true);
        mainBlock.appendChild(successElement);
        uploadFileOpen.classList.add('hidden');
        const closeSuccessButton = document.querySelector('.success__button');

        const onDocumentSuccessClick = (evt) => {
          if (evt.target === successElement) {
            successElement.remove();
          }
          document.removeEventListener('click',onDocumentSuccessClick);
        };

        document.addEventListener('click',onDocumentSuccessClick);
        
        const onDocumentSuccessKeydown = (evt) => {
          if (evt.keyCode === 27) {
            successElement.remove();
          }
          document.removeEventListener('keydown',onDocumentSuccessKeydown);
        };

        document.addEventListener('keydown',onDocumentSuccessKeydown);
      
        const onCloseSuccessButtonClick = (evt) => {
          if (evt.target !== successElement) {
            successElement.remove();
          }
          closeSuccessButton.removeEventListener('click',onCloseSuccessButtonClick);

        };

        closeSuccessButton.addEventListener('click',onCloseSuccessButtonClick);
        
      } else {
        const errorElement = errorTemplate.cloneNode(true);
        mainBlock.appendChild(errorElement);
        uploadFileOpen.classList.add('hidden');
        const closeErrorButton = document.querySelector('.error__button');

        const onDocumentErrorClick = (evt) => {
          if (evt.target === errorElement) {
            errorElement.remove();
          }
          document.removeEventListener('click', onDocumentErrorClick);
        };

        document.addEventListener('click', onDocumentErrorClick);
        
        const onDocumentErrorKeydown = (evt) => {
          if (evt.keyCode === 27) {
            errorElement.remove();
          }
          document.removeEventListener('keydown', onDocumentErrorKeydown);
        };

        document.addEventListener('keydown', onDocumentErrorKeydown);
        
        const onCloseErrorButtonClick = (evt) => {
          if (evt.target !== errorElement) {
            errorElement.remove();
          }
          closeErrorButton.removeEventListener('click', onCloseErrorButtonClick);
        };

        closeErrorButton.addEventListener('click', onCloseErrorButtonClick);
      }
    }).catch(() => {
      const errorElement = errorTemplate.cloneNode(true);
      mainBlock.appendChild(errorElement);
      uploadFileOpen.classList.add('hidden');
      const closeErrorButton = document.querySelector('.error__button');
      
      const onDocumentErrorClick = (evt) => {
        if (evt.target === errorElement) {
          errorElement.remove();
        }
        document.removeEventListener('click', onDocumentErrorClick);
      };

      document.addEventListener('click', onDocumentErrorClick);

      const onDocumentErrorKeydown = (evt) => {
        if (evt.keyCode === 27) {
          errorElement.remove();
        }
        document.removeEventListener('keydown', onDocumentErrorKeydown);
      };
      
      document.addEventListener('keydown', onDocumentErrorKeydown);

      const onCloseErrorButtonClick = (evt) => {
        if (evt.target !== errorElement) {
          errorElement.remove();
        }
        closeErrorButton.removeEventListener('click', onCloseErrorButtonClick);
      };

      closeErrorButton.addEventListener('click', onCloseErrorButtonClick);
    })
});

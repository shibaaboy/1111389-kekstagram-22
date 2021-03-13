import {body} from './modal.js';

let uploadFile = document.querySelector('#upload-file');
let uploadFileOpen = document.querySelector('.img-upload__overlay'); 
let uploadFileClose = document.querySelector('#upload-cancel');


uploadFile.addEventListener('click', () => {
  uploadFileOpen.classList.remove('hidden');
  body.classList.add('modal-open');
});

uploadFileClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  uploadFileOpen.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    uploadFile.classList.add('hidden');
  }
});

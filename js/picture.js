import {textHashtags,textDescription} from './hashtag.js';
import {body,popup} from './modal.js';

let uploadFile = document.querySelector('#upload-file');
let uploadFileOpen = document.querySelector('.img-upload__overlay');
let uploadFileClose = document.querySelector('#upload-cancel');
let scaleSmaller = document.querySelector('.scale__control--smaller');
let scaleBigger = document.querySelector('.scale__control--bigger');
let scaleValue = document.querySelector('.scale__control--value');
let imgUploadPreview = document.querySelector('.img-upload__preview');
let sliderContainer = document.querySelector('.effect-level');

uploadFile.addEventListener('click', () => {
  uploadFileOpen.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleValue.value = '100%';
  imgUploadPreview.style.transform = 'scale(1)';
  sliderContainer.style.display = 'none';
});

uploadFileClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  uploadFileOpen.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (evt.target !== textHashtags && evt.target !== textDescription) {
      popup.classList.add('hidden');
    }
  }
  uploadFile.value = '';
});

scaleSmaller.addEventListener('click', function (evt) {
  evt.preventDefault();

  let inputValue = scaleValue.value.slice(0, scaleValue.value.length - 1);

  if (inputValue >= 50) {
    scaleValue.value = inputValue - 25 + '%';
    imgUploadPreview.style.transform = 'scale(' + (inputValue - 25) / 100 + ')';
  }
});

scaleBigger.addEventListener('click', function (evt) {
  evt.preventDefault();

  let inputValue = scaleValue.value.slice(0, scaleValue.value.length - 1);

  if (inputValue < 80) {
    scaleValue.value = Number(inputValue) + 25 + '%';
    imgUploadPreview.style.transform = 'scale(' + (Number(inputValue) + 25) / 100 + ')';
  }
});

let effectSlider = document.querySelector('.effect-level__slider');
let effectValue = document.querySelector('.effect-level__value');
let effectNone = document.querySelector('#effect-none');
let effectChrome = document.querySelector('#effect-chrome');
let effectSepia = document.querySelector('#effect-sepia');
let effectMarvin = document.querySelector('#effect-marvin');
let effectPhobos = document.querySelector('#effect-phobos');
let effectHeat = document.querySelector('#effect-heat');

window.noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectSlider.noUiSlider.on('update', (values, handle) => {
  effectValue.value = values[handle];

  if (imgUploadPreview.classList.contains('effects__preview--chrome')) {
    imgUploadPreview.style.filter = 'grayscale(' + effectValue.value + ')';
  }
  if (imgUploadPreview.classList.contains('effects__preview--sepia')) {
    imgUploadPreview.style.filter = 'sepia(' + effectValue.value + ')'; 
  }
  if (imgUploadPreview.classList.contains('effects__preview--marvin')) {
    imgUploadPreview.style.filter = 'invert(' + effectValue.value + '%)';
  }
  if (imgUploadPreview.classList.contains('effects__preview--phobos')) {
    imgUploadPreview.style.filter = 'blur(' + effectValue.value + 'px)';
  }
  if (imgUploadPreview.classList.contains('effects__preview--heat')) {
    imgUploadPreview.style.filter = 'brightness(' + effectValue.value + ')';
  }
});

effectNone.addEventListener('click', function () {
  imgUploadPreview.className = 'img-upload__preview';
  imgUploadPreview.style.removeProperty('filter');
  sliderContainer.style.display = 'none';
});

effectChrome.addEventListener('click', function () {
  imgUploadPreview.className = 'img-upload__preview effects__preview--chrome';
  sliderContainer.style.display = 'block';
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0.1,
    step: 0.1,
  });
});

effectSepia.addEventListener('click', function () {
  imgUploadPreview.className = 'img-upload__preview effects__preview--sepia';
  sliderContainer.style.display = 'block';
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0.1,
    step: 0.1,
  });
});

effectMarvin.addEventListener('click', function () {
  imgUploadPreview.className = 'img-upload__preview effects__preview--marvin';
  sliderContainer.style.display = 'block';
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 1,
    step: 1,
  });
});

effectPhobos.addEventListener('click', function () {
  imgUploadPreview.className = 'img-upload__preview effects__preview--phobos';
  sliderContainer.style.display = 'block';
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 0.1,
    step: 0.1,
  });
});

effectHeat.addEventListener('click', function () {
  imgUploadPreview.className = 'img-upload__preview effects__preview--heat';
  sliderContainer.style.display = 'block';
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 1,
    step: 0.1,
  });
});

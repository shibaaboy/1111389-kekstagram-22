import {textHashtags,textDescription} from './hashtag.js';
import {body} from './modal.js';

let uploadFile = document.querySelector('#upload-file');
let uploadFileOpen = document.querySelector('.img-upload__overlay');
let uploadFileClose = document.querySelector('#upload-cancel');
let scaleSmaller = document.querySelector('.scale__control--smaller');
let scaleBigger = document.querySelector('.scale__control--bigger');
let scaleValue = document.querySelector('.scale__control--value');
let imgUploadPreview = document.querySelector('.img-upload__preview');
let sliderContainer = document.querySelector('.effect-level');

const openUploadFile = () => {
  uploadFileOpen.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleValue.value = '100%';
  imgUploadPreview.className = 'img-upload__preview';
  sliderContainer.style.display = 'none';
  imgUploadPreview.style.transform = 'scale(1)';
  imgUploadPreview.style.removeProperty('filter');
  textHashtags.style.border = '';
  textDescription.style.border = '';
  textHashtags.value = '';
  textDescription.value = '';
  uploadFileClose.addEventListener('click', closeUploadFile);
  document.addEventListener('keydown', closeFromEscUploadFile);
  effectChrome.addEventListener('click', changeEffectChrome);
  effectNone.addEventListener('click', changeEffectNone);
  effectSepia.addEventListener('click', changeEffectSepia);
  effectMarvin.addEventListener('click', changeEffectMarvin);
  effectPhobos.addEventListener('click', changeEffectPhobos);
  effectHeat.addEventListener('click', changeEffectHeat);
  scaleSmaller.addEventListener('click', ControlScaleSmaller);
  scaleBigger.addEventListener('click', ControlScaleBigger);
};

uploadFile.addEventListener('click', openUploadFile);

const closeUploadFile = (evt) => {
  evt.preventDefault();
  uploadFileOpen.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
  effectValue.value = '';
  imgUploadPreview.style.removeProperty('filter');
  scaleValue.value = '100%';
  imgUploadPreview.style.transform = 'scale(1)';
  imgUploadPreview.className = 'img-upload__preview';
  sliderContainer.style.display = 'none';
  textHashtags.style.border = '';
  textHashtags.value = '';
  textDescription.value = '';
  textDescription.style.border = '';
  uploadFileClose.removeEventListener('click', closeUploadFile);
  effectChrome.removeEventListener('click', changeEffectChrome);
  effectNone.removeEventListener('click', changeEffectNone);
  effectSepia.removeEventListener('click', changeEffectSepia);
  effectMarvin.removeEventListener('click', changeEffectMarvin);
  effectPhobos.removeEventListener('click', changeEffectPhobos);
  effectHeat.removeEventListener('click', changeEffectHeat);
  scaleSmaller.removeEventListener('click', ControlScaleSmaller);
  scaleBigger.removeEventListener('click', ControlScaleBigger);
};

const closeFromEscUploadFile = (evt) => {
  if (evt.keyCode === 27) {
    if (evt.target !== textHashtags && evt.target !== textDescription) {
      uploadFileOpen.classList.add('hidden'); 
      uploadFile.value = '';
    }
    document.removeEventListener('keydown', closeFromEscUploadFile);
  }
};

const ControlScaleSmaller = (evt) => {
  evt.preventDefault();

  let inputValue = scaleValue.value.slice(0, scaleValue.value.length - 1);

  if (inputValue >= 50) {
    scaleValue.value = inputValue - 25 + '%';
    imgUploadPreview.style.transform = 'scale(' + (inputValue - 25) / 100 + ')';
  }
};

const ControlScaleBigger = (evt) => {
  evt.preventDefault();

  let inputValue = scaleValue.value.slice(0, scaleValue.value.length - 1);

  if (inputValue < 80) {
    scaleValue.value = Number(inputValue) + 25 + '%';
    imgUploadPreview.style.transform = 'scale(' + (Number(inputValue) + 25) / 100 + ')';
  }
};

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
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => {
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

const changeEffectNone = () => {
  imgUploadPreview.className = 'img-upload__preview';
  imgUploadPreview.style.removeProperty('filter');
  sliderContainer.style.display = 'none';
  effectValue.value = '';
  window.noUiSlider.destroy;
};


const changeEffectChrome = () => {
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
};


const changeEffectSepia = () => {
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
};


const changeEffectMarvin = () => {
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
};


const changeEffectPhobos = () => {
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
};


const changeEffectHeat = () => {
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
};

export {uploadFileOpen,imgUploadPreview};
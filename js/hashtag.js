const textHashtags = document.querySelector('.text__hashtags');
let textHashtagsArr = textHashtags.value.toLowerCase().split(' ');

textHashtags.addEventListener('input', () => {

  for (let i = 0; i < textHashtagsArr.length; i++) {
    if (textHashtagsArr[i][0] !== '#') {
      textHashtags.setCustomValidity('Хэш-тег начинается с решётки');

    } else if (textHashtagsArr[i].length > 20) {
      textHashtags.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');

    } else if (textHashtagsArr.length > 5) {
      textHashtags.setCustomValidity('Нельзя указать больше 5 хэш-тегов');

    } else if (textHashtagsArr[i].length <= 1) {
      textHashtags.setCustomValidity('Хеш-тег не может состоять только из одной решётки');

    } else {
      textHashtags.setCustomValidity('');
    }
  }

  textHashtags.reportValidity();
});

const textDescription = document.querySelector('.text__description');
const textDescriptionArr = textDescription.value.toLowerCase();

textDescription.addEventListener('input', () => {
  for (let i = 0; i < textDescriptionArr.length; i++) {
    if (textDescriptionArr.length > 140) {
      textDescription.setCustomValidity('Длина комментария не может составлять больше 140 символов');
    } else {
      textDescription.setCustomValidity('');
    }

    textDescription.reportValidity();
  }
});

const textHashtags = document.querySelector('.text__hashtags');

textHashtags.addEventListener('input', () => {
  let textHashtagsArray = textHashtags.value.trim().toLowerCase().split(/ +/g);
  let regular = /^#[0-9a-zA-Zа-яА-Я]+$/;
  for (let i = 0; i < textHashtagsArray.length; i++) {
    if (textHashtagsArray[i][0] !== '#') {
      textHashtags.setCustomValidity('Хэш-тег начинается с решётки');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (textHashtagsArray[i].length > 20) {
      textHashtags.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (textHashtagsArray.length > 5) {
      textHashtags.setCustomValidity('Нельзя указать больше 5 хэш-тегов');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (textHashtagsArray[i].length <= 1) {
      textHashtags.setCustomValidity('Хеш-тег не может состоять только из одной решётки');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (i !== textHashtagsArray.indexOf(textHashtagsArray[i]) || i !== textHashtagsArray.lastIndexOf(textHashtagsArray[i])) {
      textHashtags.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (textHashtagsArray[i].search(regular) === -1) {
      textHashtags.setCustomValidity('Строка после решётки должна состоять из букв и чисел');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else {
      textHashtags.setCustomValidity('');
      textHashtags.classList.remove('errorClass');
      textHashtags.style.border = '';
    }
  }
  textHashtags.reportValidity();
});

const textDescription = document.querySelector('.text__description');

textDescription.addEventListener('input', () => {
  let textDescriptionArray = textDescription.value.toLowerCase();

  for (let i = 0; i < textDescriptionArray.length; i++) {
    if (textDescriptionArray.length > 140) {
      textDescription.setCustomValidity('Длина комментария не может составлять больше 140 символов');
      textDescription.classList.add('errorClass');
      textDescription.style.border = '3px solid red';
    } else {
      textDescription.classList.remove('errorClass');
      textDescription.style.border = '';
    }
    textDescription.reportValidity();
  }
});

export {textHashtags,textDescription};
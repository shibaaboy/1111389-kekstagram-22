const textHashtags = document.querySelector('.text__hashtags');

textHashtags.addEventListener('input', () => {
  let textHashtagsArr = textHashtags.value.toLowerCase().split(' ');
  let reg = /^#[0-9a-zA-Zа-яА-Я]+$/;
  for (let i = 0; i < textHashtagsArr.length; i++) {
    if (textHashtagsArr[i][0] !== '#') {
      textHashtags.setCustomValidity('Хэш-тег начинается с решётки');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (textHashtagsArr[i].length > 20) {
      textHashtags.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (textHashtagsArr.length > 5) {
      textHashtags.setCustomValidity('Нельзя указать больше 5 хэш-тегов');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (textHashtagsArr[i].length <= 1) {
      textHashtags.setCustomValidity('Хеш-тег не может состоять только из одной решётки');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (i !== textHashtagsArr.indexOf(textHashtagsArr[i]) || i !== textHashtagsArr.lastIndexOf(textHashtagsArr[i])) {
      textHashtags.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
      textHashtags.classList.add('errorClass');
      textHashtags.style.border = '3px solid red';
    } else if (textHashtagsArr[i].search(reg) === -1) {
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
  let textDescriptionArr = textDescription.value.toLowerCase();

  for (let i = 0; i < textDescriptionArr.length; i++) {
    if (textDescriptionArr.length > 140) {
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
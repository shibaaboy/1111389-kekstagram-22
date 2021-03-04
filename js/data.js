import {getRandomIntInclusive, getRandomArrayInt} from './util.js'

const DESCRIPTIONS = [
  'Хорошая фотография',
  'Моя фотография',
  'Отличная фотография',
  'Великолепная фотография!',
  'Замечательная фотография',
  'Слишком короткое описание',
  'Слишком большое описание',
  'Тут что-то написано',
  'Ой, как много текста!',
  'Нечего и добавить',
];

const MESSAGES = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
];

const NAMES = [
  'Алексей',
  'Елизавета',
  'Максим',
  'Илья',
  'Ирина',
  'Анна',
];

const createObj = (idPerson, urlPerson) => {
  const likesOfPhoto = getRandomIntInclusive(15, 200);
  const descriptionOfPhoto = getRandomIntInclusive(0, DESCRIPTIONS.length - 1);
  const commentOfPhoto = getRandomIntInclusive(0, MESSAGES.length - 1);
  const idOtherPerson = getRandomIntInclusive(1, 1000);
  const nameOfPerson = getRandomIntInclusive(0, NAMES.length - 1);
  const avatarOfPhoto = getRandomIntInclusive(1, 6);

  return {
    id: idPerson,
    url: 'photos/' + urlPerson + '.jpg',
    description: DESCRIPTIONS[descriptionOfPhoto],
    likes: likesOfPhoto,
    comments: [{
      otherId: idOtherPerson,
      avatar: 'img/avatar' + avatarOfPhoto + '.svg',
      message: MESSAGES[commentOfPhoto],
      name: NAMES[nameOfPerson],
    }, 
    ],
  }
}

const createObjs = function () {
  let idOfPerson = getRandomArrayInt(1, 25);
  let urlPerson = getRandomArrayInt(1, 25);
  let resultArr = [];
  for (let i = 0; i < 25; i++) {
    resultArr.push(createObj(idOfPerson[i], urlPerson[i]));
  }
  return resultArr;
}

console.log(createObjs());

export {DESCRIPTIONS, MESSAGES, NAMES, createObj, createObjs};

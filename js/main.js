//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

alert(getRandomIntInclusive(1, 25));

function getRandomArrayInt(min, max) {
  let numReserve = []
  while (numReserve.length < 25) {
    let randomNumber = getRandomIntInclusive(min, max);
    let found = false;
    for (let i = 0; i < numReserve.length; i++) {
      if (numReserve[i] === randomNumber) {
        found = true;
        break;
      }
    }
    if (!found) {
      numReserve[numReserve.length] = randomNumber;
    }
  }
  return numReserve;
}

function checkLength(stringCheck, maxLenght) {
  if (stringCheck.length <= maxLenght) {
    return true;
  } else {
    return false;
  }
}

alert(checkLength('hello', 5));

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
    } ],
  }
}

let idOfPerson = getRandomArrayInt(1, 25);
let urlPerson = getRandomArrayInt(1, 25);
let resultArr = [];
for (let i = 0; i < 25; i++) {
  resultArr.push(createObj(idOfPerson[i], urlPerson[i]));
}

alert(resultArr);

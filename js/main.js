//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// alert(getRandomIntInclusive( 1, 25 ));

// function checkLength (stringCheck, maxLenght) {
//     if (stringCheck.length <= maxLenght) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   alert(checkLength( 'hello', 5 ));

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

const createObj = () => {
  const idPerson = getRandomIntInclusive(1,25);
  const likesOfPhoto = getRandomIntInclusive(15,200);
  const descriptionOfPhoto = getRandomIntInclusive(0,DESCRIPTIONS.length - 1);
  const commentOfPhoto = getRandomIntInclusive(0,MESSAGES.length - 1);
  const idOtherPerson = getRandomIntInclusive(1,1000);
  const nameOfPerson = getRandomIntInclusive(0,NAMES.length -1);

  return {
    id: idPerson, 
    url: '', 
    description: DESCRIPTIONS[descriptionOfPhoto], 
    likes: likesOfPhoto,
    id1: idOtherPerson, 
    avatar: '',
    message: MESSAGES[commentOfPhoto],
    name: nameOfPerson,
  }
}

alert(createObj());

// const createObj = () => {
//     const idPerson = getRandomIntInclusive(1,25);
//     const likesOfPhoto = getRandomIntInclusive(15,200);
//     const descriptionOfPhoto = getRandomIntInclusive(0,DESCRIPTIONS.length - 1);
//     const commentOfPhoto = getRandomIntInclusive(0,MESSAGES.length - 1);
//     const idOtherPerson = getRandomIntInclusive(1,1000);
//     const nameOfPerson = getRandomIntInclusive(0,NAMES.length -1);

//     return {
//         id: idPerson, 
//         url: '', 
//         description: DESCRIPTIONS[descriptionOfPhoto], 
//         likes: likesOfPhoto,
//         comment: [ // РУГАЕТСЯ НА ТО, ЧТО ТАК НАПИСАЛ :(
//             {
//                 otherId: idOtherPerson, 
//                 avatar: '',
//                 message: MESSAGES[commentOfPhoto],
//                 name: nameOfPerson,
//             }
//         ]
//     }
// }


// Возможно этот код или нет (для id и картинок) :\ https://myrusakov.ru/js-random-numbers.html
// var numPool = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// function shuffle(numPool) {
//   for(var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
//   return numPool;
// };
// var randomResult = shuffle(numPool);
// while( randomResult.length > 0 ) {
//   console.log( randomResult.pop() );
// }

// Или это ...
// var numReserve = []
// while (numReserve.length < 12) {
//   var randomNumber = Math.ceil(Math.random() * 1000);
//   var found = false;
//   for (var i = 0; i < numReserve.length; i++) {
//   if (numReserve[i] === randomNumber){
//    found = true;
//    break;
//   }
//   }
//   if (!found) { numReserve[numReserve.length]=randomNumber; }
// }

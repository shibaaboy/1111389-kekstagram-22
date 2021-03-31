//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


function getRandomArrayInt(min, max) {
  let numbersReserve = []
  while (numbersReserve.length < 25) {
    let randomNumber = getRandomIntInclusive(min, max);
    let found = false;
    for (let i = 0; i < numbersReserve.length; i++) {
      if (numbersReserve[i] === randomNumber) {
        found = true;
        break;
      }
    }
    if (!found) {
      numbersReserve[numbersReserve.length] = randomNumber;
    }
  }
  return numbersReserve;
}

export {getRandomIntInclusive, getRandomArrayInt};

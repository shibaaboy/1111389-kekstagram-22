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

export {getRandomIntInclusive, getRandomArrayInt};

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

alert(getRandomIntInclusive( 100, 500 ));

function checkLength (stringCheck, maxLenght) {
  if (stringCheck.length <= maxLenght) {
    return true;
  } else {
    return false;
  }
}

alert(checkLength( 'hello', 5 ));

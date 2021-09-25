//Функции, возвращающие случайное целое число из переданного диапазона включительно (Источник: https://developer.mozilla.org/)
const getRandomInt = function(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1,100));//Максимум и минимум включаются

const getRandomIntNew = function(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomIntNew(10,50)) //Максимум не включается, минимум включается

//Функция для проверки максимальной длины строки
const checkLength = function (currentString, maxLength) {

  if (currentString.length < maxLength) {
    return true;
  } else {return false};
}

console.log(checkLength('Привет', 140));

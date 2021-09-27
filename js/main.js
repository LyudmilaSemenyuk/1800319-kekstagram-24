//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max) {
    return min;
  }
  if (min < 0 || max < min) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(0,100);

//Функция для проверки максимальной длины строки
const checkLength = function (currentString, maxLength) {
  return currentString.length < maxLength;
};

checkLength('Привет', 140);

//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = function(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min===max) {
    return min;
  }
  if (max<min) {
    throw new Error('Значение "до" должно быть больше значения "от"');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

(getRandomInt(1,100));

//Функция для проверки максимальной длины строки
const checkLength = function (currentString, maxLength) {

  if (currentString.length < maxLength) {
    return true;
  } else {
    return false;
  }
};

checkLength('Привет', 140);


// //Функция, возвращающая случайное целое число из переданного диапазона включительно
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

// //Функция для проверки максимальной длины строки
// const checkLength = function (currentString, maxLength) {
//   return currentString.length < maxLength;
// };

// checkLength('Привет', 140);


// module4-task1

const PHOTO_DESCRIPTION = [
  'На море',
  'На работе',
  'На прогулке',
  'Отпуск продолжается',
  'В ресторане',
  'Свадьба друга',
  'Мой завтрак',
  'Мой кот',
  'На рыбалке',
  'Мои племянники',
];

const COMMENTS_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_NAME = [
  'Михаил',
  'Татьяна',
  'Жанна',
  'Машенька',
  'Катюша',
  'Алиса',
];


const getComments = (numberOfComments) => {
  const comments = [];
  for (let num = 0; num < numberOfComments; num++) {
    comments.push({
      id: num,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: COMMENTS_MESSAGE[getRandomInt(0, COMMENTS_MESSAGE.length - 1)],
      name: COMMENTS_NAME[getRandomInt(0, COMMENTS_MESSAGE.length - 1)],
    });
  }
  return comments;
};

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: PHOTO_DESCRIPTION[getRandomInt(0, PHOTO_DESCRIPTION.length - 1)],
  likes: getRandomInt(15, 200),
  comments: getComments(getRandomInt(1, 100)),
});


const POSTS = [];

for (let index = 0; index < 25; index++){
  POSTS.push(createPost(index));
}



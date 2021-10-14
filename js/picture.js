import {PICTURES} from './data.js';
const pictureContainer = document.querySelector('.pictures');
const newPictureTemplate = document.querySelector('#picture').content;
// const listOfPictures = createPicture();

const resize = function () {
  PICTURES.forEach((picture) => {
    const newPicture = newPictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = picture.url;
    newPicture.querySelector('.picture__likes').textContent = picture.likes;
    newPicture.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureContainer.appendChild(newPicture);
  });
};


export {resize};

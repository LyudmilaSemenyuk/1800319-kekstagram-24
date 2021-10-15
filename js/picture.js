import {PICTURES} from './data.js';
const pictureContainer = document.querySelector('.pictures');
const similarListFragment = document.createDocumentFragment();
const newPictureTemplate = document.querySelector('#picture').content;

const resize = function () {
  PICTURES.forEach((picture) => {
    const newPicture = newPictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = picture.url;
    newPicture.querySelector('.picture__likes').textContent = picture.likes;
    newPicture.querySelector('.picture__comments').textContent = picture.comments.length;
    similarListFragment.appendChild(newPicture);
  });
  pictureContainer.appendChild(similarListFragment);
};


export {resize};

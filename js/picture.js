import {PICTURES} from './data.js';
import './fullscreen-picture.js';
import { addingEventListener } from './fullscreen-picture.js';
const pictureContainer = document.querySelector('.pictures');
const similarListFragment = document.createDocumentFragment();
const newPictureTemplate = document.querySelector('#picture').content;

PICTURES.forEach((picture) => {
  let newPicture = newPictureTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = picture.url;
  newPicture.querySelector('.picture__likes').textContent = picture.likes;
  newPicture.querySelector('.picture__comments').textContent = picture.comments.length;
  newPicture = addingEventListener(newPicture, picture);
  similarListFragment.appendChild(newPicture);
});
pictureContainer.appendChild(similarListFragment);

const newCommentTemplate = document.querySelector('#comment').content;


const createComment = function (commentData) {
  const newComment = newCommentTemplate.cloneNode(true);
  newComment.querySelector('.social__picture').src = commentData.avatar;
  newComment.querySelector('.social__picture').alt = commentData.name;
  newComment.querySelector('.social__text').textContent = commentData.message;
  return newComment;
};

const loaderClickHandler = function (evt) {
  const loadButton = evt.currentTarget;
  const existingCommentsCount = document.querySelectorAll('.social__comment').length;
  for (let i = existingCommentsCount; i < 5 + existingCommentsCount; i++) {
    if (i < loadButton.picture.comments.length) {
      loadButton.commentsList.appendChild(createComment(loadButton.picture.comments[i]));
    } else {
      loadButton.loadCommentsButton.classList.add('hidden');
    }
  }
  document.querySelector('.showing-count').textContent = document.querySelectorAll('.social__comment').length;
};

const pictureClickHandler = function (evt) {
  const thumbnail = evt.currentTarget;
  let firstCommentsNum = thumbnail.picture.comments.length;
  if (thumbnail.picture.comments.length > 5) {
    thumbnail.loadCommentsButton.classList.remove('hidden');
    firstCommentsNum = 5;
  } else {
    thumbnail.loadCommentsButton.classList.add('hidden');
  }
  evt.preventDefault();
  thumbnail.fullScreenFoto.classList.remove('hidden');
  thumbnail.fullScreenFoto.querySelector('.big-picture__img img').src = thumbnail.picture.url;
  thumbnail.fullScreenFoto.querySelector('.likes-count').textContent = thumbnail.picture.likes;
  thumbnail.fullScreenFoto.querySelector('.showing-count').textContent =  firstCommentsNum;
  thumbnail.fullScreenFoto.querySelector('.comments-count').textContent = thumbnail.picture.comments.length;
  thumbnail.fullScreenFoto.querySelector('.social__caption').textContent = thumbnail.picture.description;
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';
  for (let i = 0; i < firstCommentsNum; i++) {
    commentsList.appendChild(createComment(thumbnail.picture.comments[i]));
  }
  document.querySelector('body').classList.add('modal-open');
  const commentsLoader = document.querySelector('.comments-loader');
  commentsLoader.picture = thumbnail.picture;
  commentsLoader.commentsList = commentsList;
  commentsLoader.loadCommentsButton = thumbnail.loadCommentsButton;
  commentsLoader.addEventListener('click', loaderClickHandler);
};


const addComments = function (newPicture, picture){
  const thumbnail = newPicture.querySelector('.picture');
  thumbnail.fullScreenFoto = document.querySelector('.big-picture');
  thumbnail.loadCommentsButton = document.querySelector('.social__comments-loader');
  thumbnail.picture = picture;
  thumbnail.addEventListener('click', pictureClickHandler);
  return newPicture;
};

export {addComments, loaderClickHandler};

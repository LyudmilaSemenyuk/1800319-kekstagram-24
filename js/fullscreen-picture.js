const newCommentTemplate = document.querySelector('#comment').content;

const createComment = function (commentData) {
  const newComment = newCommentTemplate.cloneNode(true);
  newComment.querySelector('.social__picture').src = commentData.avatar;
  newComment.querySelector('.social__picture').alt = commentData.name;
  newComment.querySelector('.social__text').textContent = commentData.message;
  return newComment;
};


const addingEventListener = function (newPicture, picture){
  const a = newPicture.querySelector('.picture');
  const fullScreenFoto = document.querySelector('.big-picture');


  a.addEventListener('click', (evt) => {
    evt.preventDefault();
    fullScreenFoto.classList.remove('hidden');
    fullScreenFoto.querySelector('.big-picture__img img').src = picture.url;
    fullScreenFoto.querySelector('.likes-count').textContent = picture.likes;
    fullScreenFoto.querySelector('.comments-count').textContent = picture.comments.length;
    fullScreenFoto.querySelector('.social__caption').textContent = picture.description;
    const commentsList = document.querySelector('.social__comments');
    if (document.querySelector('.social__comments').children.length === 0) {
      for (let i = 0; i < picture.comments.length; i++) {
        commentsList.appendChild(createComment(picture.comments[i]));
      }
    }
    document.querySelector('body').classList.add('modal-open');
  });
  return newPicture;
};

export {addingEventListener};

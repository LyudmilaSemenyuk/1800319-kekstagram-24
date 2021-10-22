const pictureCancelButton = document.querySelector('#picture-cancel');
const bigPictureSection = document.querySelector('.big-picture');

pictureCancelButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPictureSection.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  if(evt.key === 'Escape') {
    bigPictureSection.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown');
  }
});


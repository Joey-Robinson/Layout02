// Modal
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none';
}

const outsideClick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
const modal = document.getElementById('one-three__modal');
const modalButton = document.getElementById('one-three__button');
const closeButton = document.getElementsByClassName('one-three__button__close')[0];

modalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Visibility Toggle
// const open = () => {
//   const hidden = document.getElementById('hidden');
//   hidden.style.display = hidden.style.display == 'none' ? 'inline-block' : 'none';
// }

// const visibility = document.getElementById('clicky');
// visibility.addEventListener('click', open)
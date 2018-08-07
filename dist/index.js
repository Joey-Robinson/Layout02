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
const modal = document.getElementById('home-one__modal');
const modalBtn = document.getElementById('home-one__button');
const closeBtn = document.getElementsByClassName('home-one__button__close')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Visibility Toggle
// const open = () => {
//   const hidden = document.getElementById('hidden');
//   hidden.style.display = hidden.style.display == 'none' ? 'inline-block' : 'none';
// }

// const visibility = document.getElementById('clicky');
// visibility.addEventListener('click', open)
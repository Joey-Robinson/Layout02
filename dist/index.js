const modal = document.getElementById('home-one__modal');
const modalBtn = document.getElementById('home-one__button');
const closeBtn = document.getElementsByClassName('home-one__button__close')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}
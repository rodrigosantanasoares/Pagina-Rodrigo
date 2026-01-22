AOS.init({
  duration: 1000,
  once: true,
});

/* Modal da galeria */
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

if (modal && modalImg) {
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modalImg.src = img.src;
    });
  });

  modal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalImg.src = '';
  });
}

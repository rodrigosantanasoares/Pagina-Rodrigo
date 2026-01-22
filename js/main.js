AOS.init({
  duration: 1000,
  once: true,
});

/* Partículas */
if (document.getElementById('particles-js')) {
  particlesJS('particles-js', {
    particles: {
      number: { value: 70 },
      color: { value: '#ffffff' },
      opacity: { value: 0.15 },
      size: { value: 3 },
      move: { speed: 1 },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.1,
        width: 1
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: 'repulse' }
      }
    }
  });
}

/* Modal galeria */
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

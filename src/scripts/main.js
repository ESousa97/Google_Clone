const PARTICLE_INTERVAL_MS = 500;

const createParticle = () => {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const size = Math.random() * 4 + 2;
  const left = Math.random() * 100;
  const animationDuration = Math.random() * 10 + 10;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${left}%`;
  particle.style.animationDuration = `${animationDuration}s`;

  document.body.appendChild(particle);

  window.setTimeout(() => {
    particle.remove();
  }, animationDuration * 1000);
};

const startParticles = () => {
  window.setInterval(createParticle, PARTICLE_INTERVAL_MS);
};

const startTypingEffect = (searchInput) => {
  const phrases = [
    'Pesquisar no Google...',
    'Descubra o mundo...',
    'Encontre tudo aqui...',
    'Sua busca começa aqui...'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      searchInput.placeholder = currentPhrase.substring(0, charIndex - 1);
      charIndex -= 1;
    } else {
      searchInput.placeholder = currentPhrase.substring(0, charIndex + 1);
      charIndex += 1;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      window.setTimeout(() => {
        isDeleting = true;
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    window.setTimeout(typeEffect, typingSpeed);
  };

  window.setTimeout(typeEffect, 3000);
};

const bindClickRipple = () => {
  document.addEventListener('click', (event) => {
    const ripple = document.createElement('div');
    ripple.classList.add('click-ripple');
    ripple.style.left = `${event.clientX - 25}px`;
    ripple.style.top = `${event.clientY - 25}px`;

    document.body.appendChild(ripple);

    window.setTimeout(() => {
      ripple.remove();
    }, 600);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.input-pesquisa');

  startParticles();
  bindClickRipple();

  if (searchInput) {
    startTypingEffect(searchInput);
  }
});

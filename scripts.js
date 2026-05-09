//Menu collapse trigger
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('nav');

if (menuIcon && navMenu) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

//Hero image slideshow
const images = [
    'img/0002.png',
    'img/0003.png',
    'img/0004.png'
];
let currentIndex = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
    if (!hero) {
        return;
    }
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

if (hero) {
    // Change background every 4 seconds
    setInterval(changeBackground, 4000);
    // Set initial background
    changeBackground();
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const statusElement = document.getElementById('formStatus');
  const submitButton = contactForm.querySelector('.submit-btn');

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (statusElement) {
      statusElement.textContent = 'Sending message...';
    }
    if (submitButton) {
      submitButton.disabled = true;
    }

    const formData = new FormData(contactForm);

    try {
      const response = await fetch('https://formsubmit.co/ajax/haoran.yip@connect.polyu.hk', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      contactForm.reset();
      if (statusElement) {
        statusElement.textContent = 'Thank you! Your message has been sent.';
      }
    } catch (error) {
      if (statusElement) {
        statusElement.textContent = 'Could not send your message. Please try again later.';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}

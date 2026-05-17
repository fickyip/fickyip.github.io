// Menu toggle
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('nav');

if (menuIcon && navMenu) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Hero image slideshow
const images = [
    'img/projects/evviva/jar-overview.jpg',
    'img/projects/ngo2deng6/AD-BuisinessCards.png',
    'img/projects/polyu-wayfinding/0001.png'
];

let currentIndex = 0;
const hero = document.querySelector('.hero');
const TRANSITION_DURATION = 1500;
const SLIDESHOW_INTERVAL = 5000;
let heroOverlay;

function initHeroSlideshow() {
    if (!hero) return;

    // Ensure hero has relative positioning for overlay
    if (getComputedStyle(hero).position === 'static') {
        hero.style.position = 'relative';
    }

    // Create overlay element
    heroOverlay = document.createElement('div');
    heroOverlay.className = 'hero-overlay';
    hero.appendChild(heroOverlay);

    // Set initial background
    hero.style.backgroundImage = `url(${images[0]})`;
    currentIndex = 1;

    // Start slideshow
    setInterval(changeBackground, SLIDESHOW_INTERVAL);
}

function changeBackground() {
    if (!hero || !heroOverlay) return;

    const nextImage = images[currentIndex];
    heroOverlay.style.backgroundImage = `url(${nextImage})`;
    heroOverlay.style.opacity = '1';

    setTimeout(() => {
        hero.style.backgroundImage = `url(${nextImage})`;
        heroOverlay.style.opacity = '0';
        currentIndex = (currentIndex + 1) % images.length;
    }, TRANSITION_DURATION);
}

initHeroSlideshow();

// Character counter for message textarea
const messageTextarea = document.getElementById('message');

if (messageTextarea) {
    const maxChars = parseInt(messageTextarea.getAttribute('maxlength'), 10);
    const charCounter = document.createElement('div');
    charCounter.className = 'char-counter';
    charCounter.setAttribute('aria-live', 'polite');
    messageTextarea.parentNode.insertBefore(charCounter, messageTextarea.nextSibling);

    function updateCharCount() {
        const remaining = maxChars - messageTextarea.value.length;
        charCounter.textContent = `${remaining}/${maxChars}`;
        charCounter.classList.toggle('full', remaining === 0);
    }

    messageTextarea.addEventListener('input', updateCharCount);
    updateCharCount();
}

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    const statusElement = document.getElementById('formStatus');
    const submitButton = contactForm.querySelector('.submit-btn');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        updateStatus('Sending message...', statusElement);
        updateCharCount();
        disableSubmit(submitButton, true);


        const formData = new FormData(contactForm);

        try {
            const response = await fetch('https://formsubmit.co/ajax/d306ac8da296abf51f3a998ae7e3edec', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData
            });

            if (!response.ok) throw new Error('Request failed');

            contactForm.reset();
            updateStatus('Thank you! Your message has been sent.', statusElement);
        } catch (error) {
            updateStatus('Could not send your message. Please try again later.', statusElement);
        } finally {
            disableSubmit(submitButton, false);
        }
    });
}

function updateStatus(message, element) {
    if (element) element.textContent = message;
}

function disableSubmit(button, disabled) {
    if (button) button.disabled = disabled;
}
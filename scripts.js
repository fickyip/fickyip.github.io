//Menu collapse trigger
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
});

//Hero image slideshow
const images = [
    'img/0002.png',
    'img/0003.png',
    'img/0004.png'
    
];
let currentIndex = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 4 seconds
setInterval(changeBackground, 4000);

// Set initial background
changeBackground();

//Send Mail Button
function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Constructing the mailto link
  const mailtoLink = `mailto:cheeseburger@connect.polyu.hk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
  
  // Opening the default mail app
  window.location.href = mailtoLink;
}

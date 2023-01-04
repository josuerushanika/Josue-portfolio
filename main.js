const mobileMenu = document.querySelector('nav .mobile-menu');
const mobileClose = document.querySelector('nav .mobile-close');
const mobileNavigation = document.querySelector('.mobile-navigation');

function display() {
  mobileNavigation.classList.toggle('active');
  mobileClose.classList.toggle('active');
}

mobileMenu.addEventListener('click', display);
mobileClose.addEventListener('click', display);

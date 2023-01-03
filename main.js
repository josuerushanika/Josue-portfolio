const mobileMenu = document.querySelector('nav .mobile-menu');
const mobileClose = document.querySelector('nav .mobile-close');
const mobileNavigation = document.querySelector('.mobile-navigation');

mobileMenu.addEventListener('click', () => {
  mobileNavigation.classList.add('active');
  mobileClose.classList.add('active');
});

mobileClose.addEventListener('click', () => {
  mobileNavigation.classList.remove('active');
  mobileClose.classList.remove('active');
});
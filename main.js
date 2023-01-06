/* eslint-disable no-plusplus */
// import from card.js
import projects from './card.js';

// nav bar
const mobileMenu = document.querySelector('nav .mobile-menu');
const mobileClose = document.querySelector('nav .mobile-close');
const mobileNavigation = document.querySelector('.mobile-navigation');

// nav bar display
const navLinkList = document.querySelectorAll('.nav-link');

function display() {
  mobileNavigation.classList.toggle('active');
  mobileClose.classList.toggle('active');
}

for (let index = 0; index < navLinkList.length; index++) {
  const element = navLinkList[index];
  element.addEventListener('click', display);
}

mobileMenu.addEventListener('click', display);
mobileClose.addEventListener('click', display);

// card
const projectsContainer = document.querySelector('.works-section');

projects.forEach((project) => {
  projectsContainer.innerHTML += `<article class="card">
  <div class="card-image">
     <img src="${project.image}" alt="Portfolio" >
  </div>
  <div class="card-content">
   <h2 class="card-title">${project.title}</h2>
   <ul class="card-info">
    <li>CANOPY</li>
    <li>Back End Dev</li>
    <li>2015</li>
   </ul>
   <P class="card-description">
    ${project.description}
   </P>
   <ul class="card-tags">
      <li>html</li>
      <li>css</li>
      <li>javaScript</li>
   </ul>
   <button class="primary-button extend-project card-button" id="${project.id}" type="button">
      see Project
   </button>
  </div>
</article>
`;
});

// PROJECT POPUP MENU

// call class  .main-popup-container
const popupMainContainer = document.querySelector('.main-popup-container');
// call class of extend-project added dynamically in js for all project
const extendProjectBtns = document.querySelectorAll('.extend-project');
// call for class close-icon-wrapper for icon image in htm
const closePopUp = document.querySelector('.close-icon-wrapper');

// Fonction to remove opupMainContainer on the body when close-icon-wrapper is clicked
function closePopUpFunc() {
  popupMainContainer.classList.remove('open');
}

// function to add class list
function showPopUp(event) {
  const projectId = event.target.id;
  const project = projects.find((project) => project.id === Number(projectId));
  const popImg = document.querySelector('.pop-img');
  const popPar = document.querySelector('.popup-card-description');
  const poPitle = document.querySelector('.main-popup-container .card-title');

  poPitle.innerHTML = project.title;
  popPar.innerHTML = project.description;
  popImg.src = project.image;

  popupMainContainer.classList.add('open');
}
// function to close addEventListener
closePopUp.addEventListener('click', closePopUpFunc);

// console.log('btns', extendProjectBtns);

// to access all button
for (let index = 0; index < extendProjectBtns.length; index++) {
  const element = extendProjectBtns[index];
  element.addEventListener('click', showPopUp);
}

// client side form validation form
const form = document.querySelector('#register');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');
const name = document.querySelector('#name');
const feedback = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.style.visibility = 'visible';
    event.preventDefault();
  }
});

// storing data in local Storage

function visitorData() {
  const visitor = {
    Name: name.value,
    Email: email.value,
    Message : feedback.value,
  };
}
// import from card.js
import projects from './card.js';

// nav bar
const mobileMenu = document.querySelector('nav .mobile-menu');
const mobileClose = document.querySelector('nav .mobile-close');
const mobileNavigation = document.querySelector('.mobile-navigation');

function display() {
  mobileNavigation.classList.toggle('active');
  mobileClose.classList.toggle('active');
}

mobileMenu.addEventListener('click', display);
mobileClose.addEventListener('click', display);

// card
const projectsContainer = document.querySelector('.works-section');
console.log('project', projectsContainer, projects);

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
   <button class="primary-button card-button" type="button">
      see Project
   </button>
  </div>
</article>
`;
});

//PROJECT POPUP MENU

const seeProjectBtn = document.querySelector('.primary-button');
const modalDisplay = document.createElement('div');
modalDisplay.classList.add('modal-display');
const allElement = document.querySelector('works-section');

//Function for clicked button 



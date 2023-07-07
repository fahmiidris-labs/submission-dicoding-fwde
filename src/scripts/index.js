import 'regenerator-runtime'; /* for async await transpile */

import '../styles/main.css';

import main from './main';
import swRegister from './sw-register';

// Hamburder
const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('.menu');
const mainElement = document.querySelector('main');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});

document.addEventListener('DOMContentLoaded', () => {
  main();
  swRegister();
});

window.addEventListener('hashchange', () => {
  main();
});

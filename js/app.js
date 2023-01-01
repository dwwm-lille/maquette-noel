// Show/hide menu
const navMenu = document.querySelector('.menu');
const navToggle = document.querySelector('.menu-toggle');
const navClose = document.querySelector('.menu-close');

navToggle.addEventListener('click', () => navMenu.classList.add('show'));
navClose.addEventListener('click', () => navMenu.classList.remove('show'));

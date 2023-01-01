// Shadow menu
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY >= 50) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
});

// Dark mode
const themeButton = document.querySelector('.theme i');

// Avec ça, on peut avoir le thème dark par défaut...
if (document.body.classList.contains('dark')) {
    themeButton.classList.remove('bx-moon');
    themeButton.classList.add('bx-sun');
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeButton.classList.toggle('bx-moon');
    themeButton.classList.toggle('bx-sun');
});

// Show/hide menu
const navMenu = document.querySelector('.menu');
const navToggle = document.querySelector('.menu-toggle');
const navClose = document.querySelector('.menu-close');

navToggle.addEventListener('click', () => navMenu.classList.add('show'));
navClose.addEventListener('click', () => navMenu.classList.remove('show'));

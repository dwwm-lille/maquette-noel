// Shadow menu
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
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

// Message
const messageButton = document.querySelector('.message .button');
const messageImage = document.querySelector('.message img');
const messageInput = document.querySelector('.message input');
const messageTitle = document.querySelector('.message .title');
const messageError = document.querySelector('.message .error');
const oldTitle = messageTitle.innerHTML;

messageButton.addEventListener('click', (e) => {
    e.preventDefault(); // Annule l'envoi formulaire

    if (messageInput.value.length > 0) {
        messageImage.style.display = 'none';
        messageInput.style.display = 'none';
        messageButton.style.display = 'none';

        messageTitle.textContent = messageInput.value;

        setTimeout(() => {
            messageImage.style.display = 'block';
            messageInput.style.display = 'block';
            messageButton.style.display = 'block';

            messageTitle.innerHTML = oldTitle;
        }, 5000);
    } else {
        messageError.innerHTML = 'Le message est vide...';
        messageError.style.display = 'block';

        setTimeout(() => {
            messageError.innerHTML = '';
            messageError.style.display = 'none';
        }, 5000);
    }
});

// Scroll up
const scrollup = document.querySelector('.scrollup');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        scrollup.classList.add('show');
    } else {
        scrollup.classList.remove('show');
    }
});

// Scroll active
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    // On va parcourir chaque section pour voir si le scroll est "dessus"
    sections.forEach((section) => {
        let scrollY = window.scrollY; // Position du scroll
        let top = section.offsetTop - 60; // Position de la zone haute de la section par rapport à la page
        let height = section.offsetHeight; // Hauteur de la section

        // console.log(section.id, top, top + height, scrollY);

        if (scrollY > top && scrollY <= top + height) {
            document.querySelector('.menu a[href*=' + section.id + ']').classList.add('active');
        } else {
            document.querySelector('.menu a[href*=' + section.id + ']').classList.remove('active');
        }
    });
});

// Swiper
new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 24,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    // Bureau (min-width)
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
    },
});

// Show/hide menu
const navMenu = document.querySelector('.menu');
const navToggle = document.querySelector('.menu-toggle');
const navClose = document.querySelector('.menu-close');

navToggle.addEventListener('click', () => navMenu.classList.add('show'));
navClose.addEventListener('click', () => navMenu.classList.remove('show'));

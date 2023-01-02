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

// Message
const messageButton = document.querySelector('.message .button');
const messageImage = document.querySelector('.message img');
const messageInput = document.querySelector('.message input');
const messageTitle = document.querySelector('.message .title');
const messageError = document.querySelector('.message .error');

messageButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (messageInput.value.length > 0) {
        messageImage.style.display = 'none';
        messageInput.style.display = 'none';
        e.target.style.display = 'none';

        messageTitle.innerHTML = messageInput.value;

        setTimeout(() => {
            messageImage.style.display = 'block';
            messageInput.style.display = 'block';
            e.target.style.display = 'block';

            messageTitle.innerHTML = 'Envoyer de bons <br> voeux!';
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
window.addEventListener('scroll', () => {
    const scrollup = document.querySelector('.scrollup');

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
        let scrollY = window.pageYOffset; // Position du scroll
        let top = section.offsetTop - 60; // Position de la zone haute de la section par rapport à la page
        let height = section.offsetHeight; // Hauteur de la section

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
    breakpoints: {
        768: {
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

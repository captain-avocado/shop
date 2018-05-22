export default function nav() {

    document.addEventListener('scroll', e => {

        const navBar = document.querySelector('.nav');
        const menuLinks = document.querySelectorAll('.menu__link');
        const openSearchIcon = document.getElementById('open');

        const header = document.querySelector('.header');

        const cart = document.querySelector('#nav-cart');

        if (window.scrollY > 127.5 + 70) {
            header.style.height = 127.5 + 70 + 'px';

            navBar.classList.add('scrolled');
            openSearchIcon.classList.add('scrolled');
            cart.classList.add('scrolled');
            for (let i = 0; i < menuLinks.length; i++) {
                menuLinks[i].classList.add('scrolled');
            }
        } else {
            header.style.height = 127.5 + 'px';

            navBar.classList.remove('scrolled');
            openSearchIcon.classList.remove('scrolled');
            cart.classList.remove('scrolled');
            for (let i = 0; i < menuLinks.length; i++) {
                menuLinks[i].classList.remove('scrolled');
            }
        }
    });

}
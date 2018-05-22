export default function nav() {

    document.addEventListener('scroll', e => {

        const navBar = document.querySelector('.nav');
        const menuLinks = document.querySelectorAll('.menu__link');
        const openSearchIcon = document.getElementById('open');

        // const fixedNavBar = navBar.cloneNode(true);
        // fixedNavBar.classList.add('scrolled');
        // const wrapper = document.querySelector('.wrapper');

        const cart = document.querySelector('#nav-cart');

        if (window.scrollY > 127.5 + 70) {

            // wrapper.insertBefore(fixedNavBar, navBar);

            navBar.classList.add('scrolled');
            openSearchIcon.classList.add('scrolled');
            cart.classList.add('scrolled');
            for (let i = 0; i < menuLinks.length; i++) {
                menuLinks[i].classList.add('scrolled');
            }
        } else {

            // document.remove(fixedNavBar);
            // wrapper.removeChild(fixedNavBar);

            navBar.classList.remove('scrolled');
            openSearchIcon.classList.remove('scrolled');
            cart.classList.remove('scrolled');
            for (let i = 0; i < menuLinks.length; i++) {
                menuLinks[i].classList.remove('scrolled');
            }
        }
    });

}
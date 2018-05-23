export default function nav() {

    document.addEventListener('scroll', e => {

        const navBar = document.querySelector('.nav_scrolled');
        if (window.scrollY > 127.5 + 70) {
            navBar.classList.add('active');
            setTimeout(() => {
                navBar.style.opacity = '1';
            }, 50);
            // navBar.style.opacity = '1';
        } else {
            navBar.classList.remove('active');
            navBar.style.opacity = '0';
        }
    });

    // navBar.addEventListener('transitionend', e => {
    //     if (navBar = e.target) {
    //         navBar.classList.remove('active');
    //     }
    // });

}
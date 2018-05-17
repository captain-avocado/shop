export default function search() {

    const searchIcon = document.getElementById('open');
    const menu = document.querySelector('.menu');
    const searchRow = document.querySelector('.search-row');
    const closeIcon = document.getElementById('close');

    const searchBtn = document.getElementById('search');

    menu.addEventListener('transitionend', e => {
        if (menu === e.target) {
            searchIcon.style.display = 'none';
            menu.style.display = 'none';
            
            closeIcon.style.display = 'block';
            searchRow.style.display = 'flex';
        }
    });

    searchRow.addEventListener('transitionend', e => {
        if (searchRow === e.target) {
            searchRow.style.display = '';
            searchIcon.style.display = '';
            menu.style.display = '';
            closeIcon.style.display = '';
        }
    });

    searchIcon.addEventListener('click', e => {
        e.preventDefault();

        searchRow.style.opacity = 1;
        menu.style.opacity = 0;
        closeIcon.style.opacity = 1;
        searchIcon.style.opacity = 0;

        console.log('Открытие строки...');

    });

    closeIcon.addEventListener('click', e => {
        e.preventDefault();

        menu.style.opacity = 1;
        searchRow.style.opacity = 0;
        closeIcon.style.opacity = 0;
        searchIcon.style.opacity = 1;

        console.log('Закрытие строки...');

    });

    searchBtn.addEventListener('click', e => e.preventDefault());

}

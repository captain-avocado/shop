export default function search() {

    const searchIcon = document.getElementById('open');
    const menu = document.querySelector('.menu');
    const searchRow = document.querySelector('.search-row');
    const closeIcon = document.getElementById('close');

    const searchBtn = document.getElementById('search');

    searchIcon.addEventListener('click', e => {
        e.preventDefault();

        menu.style.opacity = 0;
        searchRow.style.opacity = 1;

        menu.addEventListener('transitionend', e => {
            searchIcon.style.display = 'none';
            menu.style.display = 'none';

            closeIcon.style.display = 'block';
            searchRow.style.display = 'flex';
            searchRow.style.opacity = 1;

        });

        console.log('Открытие строки...');

    });

    closeIcon.addEventListener('click', e => {
        e.preventDefault();

        searchRow.style.opacity = 0;
        menu.style.opacity = 1;

        searchRow.addEventListener('transitionend', e => {
            searchRow.style.display = '';
            searchIcon.style.display = '';
            menu.style.display = '';
            closeIcon.style.display = '';
        });

        console.log('Закрытие строки...');

    });

    searchBtn.addEventListener('click', e => e.preventDefault());

}

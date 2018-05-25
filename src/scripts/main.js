import search from './modules/search';
// import slider from './modules/slider';
import nav from './modules/nav';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';

console.log($);
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        // autoplay: true,
        dots: true,
        items: 1,
        loop: true,
        navigation : true, 
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        dotsContainer: '#owl-dots',
    });
    $('.owl-dot').click(function (e) {
        e.preventDefault();
        $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});

search();
// slider();
nav();



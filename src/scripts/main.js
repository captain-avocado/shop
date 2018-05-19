import search from './modules/search';
import slider from './modules/slider';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

console.log($);
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            },
        },
    });
});

search();
// slider();



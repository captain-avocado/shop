import search from './modules/search';
// import slider from './modules/slider';
import nav from './modules/nav';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

console.log($);
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        items: 1,
        loop: true,
        navigation : true, 
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        // autoHeight:true,
        // responsive:{
        //     0:{
        //         items:1,
        //     },
        //     600:{
        //         items:3,
        //     },
        //     1000:{
        //         items:5,
        //     },
        // },
    });
});

search();
// slider();
nav();



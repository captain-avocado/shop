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

    // $('.owl-carousel').each(function () {
    //     var $this = $(this);
    
    //     $this.owlCarousel({
    //         afterUpdate: function () {
    //             updateSize($this);
    //         },
    //         afterInit: function () {
    //             updateSize($this);
    //         },
    //     });
    // });
    
    // function updateSize($carousel) {
    //     var maxHeight = 0;
    
    //     $('.owl-item', $carousel).each(function () {
    //         var $this = $(this);
    //         var $image = $this.find('img');
    
    //         //Max height
    //         var prevHeight = $this.height();
    //         var thisHeight = $this.height('auto').height();
    //         $this.height(prevHeight);
    //         maxHeight = (maxHeight > thisHeight ? maxHeight : thisHeight);
    
    //         //Set image as background
    //         var imageSource = $image.attr('src');
    //         $this.css('backgroundImage', 'url(' + imageSource + ')');
    //     });
    
    //     //Set equal height
    //     $('.owl-item', $carousel).height(maxHeight);
    // }

    

});

search();
// slider();
nav();



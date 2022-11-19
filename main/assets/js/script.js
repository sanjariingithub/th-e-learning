jQuery(function ($) {

    'use strict';

    // Hot Deals Carousel starts
    $('.hot-deals__carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    // Hot Deals Carousel ends

    $('.owl-three').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:0
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

});
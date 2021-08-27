$(document).ready(function($){
    "use strict";

    $('#customers-testimonials').owlCarousel({
        loop:true,
        center:true,
        items:3,
        autoplay:true,
        dots:true,
        autoplayTimeout:8500,
        smartSpeed:450,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
jQuery(function ($) {

    'use strict';
    // Navbar offcanvas dropdown toggle starts
    const navbarOffCanvas = document.querySelector(".offcanvas.navbar-content__item");
    if (navbarOffCanvas) {
        navbarOffCanvas.addEventListener('show.bs.offcanvas', event => {
           $(".offcanvas.navbar-content__item .offcanvas-body .nav-item a").on("click", function () {

                var $this = $(this);
                if ($this.hasClass("dropdown-toggle")) {
                    $this.toggleClass("icon-rotate");
                    $this.next().slideToggle();
                    if ($this.parent().siblings().children().hasClass("dropdown-toggle")) {
                        $this.parent().siblings().children().removeClass("icon-rotate");
                        $this.parent().siblings().children().next().slideUp();
                    }
                }
            });
        })

        // When navbar offcanvas gets hide
        //    navbarOffCanvas.addEventListener('hide.bs.offcanvas', event => {
        //        $(".nav-item a").removeClass("icon-rotate");
        //        $(".nav-item a").next().slideUp();
        //    })
    }
    // Navbar offcanvas dropdown toggle ends


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
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 0
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    //selection tab
$(".explore-section-buttonpart explore-section-buttons li").on('click','ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
});

});

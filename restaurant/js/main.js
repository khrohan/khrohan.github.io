(function($) {

    "use strict";

    

    
$('.rc-carousel').each(function() {
    var carousel = $(this),
        loop = carousel.data('loop'),
        items = carousel.data('items'),
        margin = carousel.data('margin'),
        stagePadding = carousel.data('stage-padding'),
        autoplay = carousel.data('autoplay'),
        autoplayTimeout = carousel.data('autoplay-timeout'),
        smartSpeed = carousel.data('smart-speed'),
        dots = carousel.data('dots'),
        nav = carousel.data('nav'),
        navSpeed = carousel.data('nav-speed'),
        rXsmall = carousel.data('r-x-small'),
        rXsmallNav = carousel.data('r-x-small-nav'),
        rXsmallDots = carousel.data('r-x-small-dots'),
        rXmedium = carousel.data('r-x-medium'),
        rXmediumNav = carousel.data('r-x-medium-nav'),
        rXmediumDots = carousel.data('r-x-medium-dots'),
        rSmall = carousel.data('r-small'),
        rSmallNav = carousel.data('r-small-nav'),
        rSmallDots = carousel.data('r-small-dots'),
        rMedium = carousel.data('r-medium'),
        rMediumNav = carousel.data('r-medium-nav'),
        rMediumDots = carousel.data('r-medium-dots'),
        center = carousel.data('center');

    carousel.owlCarousel({
        loop: (loop ? true : false),
//        items: (items ? items : 4),
//        lazyLoad: true,
        margin: (margin ? margin : 0),
        autoplay: (autoplay ? true : false),
        autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
        smartSpeed: (smartSpeed ? smartSpeed : 500),
        dots: (dots ? true : false),
        nav: (nav ? true : false),
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        navSpeed: (navSpeed ? true : false),
        center: (center ? true : false),
        responsiveClass: true,
        responsive: {
            0: {
                items: (rXsmall ? rXsmall : 1),
                nav: (rXsmallNav ? true : false),
                dots: (rXsmallDots ? true : false)
            },
            480: {
                items: (rXmedium ? rXmedium : 2),
                nav: (rXmediumNav ? true : false),
                dots: (rXmediumDots ? true : false)
            },
            768: {
                items: (rSmall ? rSmall : 3),
                nav: (rSmallNav ? true : false),
                dots: (rSmallDots ? true : false)
            },
            992: {
                items: (rMedium ? rMedium : 5),
                nav: (rMediumNav ? true : false),
                dots: (rMediumDots ? true : false)
            }
        }
    });

});


                 
})(jQuery);

$(document).ready(function(){
    $(".nav-menu .bar").click(function(){
        $(".nav-menu ul").slideToggle(1000);
    });
    $(window).resize(function(){
		var screenWidth = $(window).width();
		if(screenWidth > 768){

		$(".nav-menu ul").removeAttr("style");
		}
	});
});

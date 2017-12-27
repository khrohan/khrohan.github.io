$(document).ready(function(){
    $(".navBar .bar").click(function(){
        $(".navBar ul").slideToggle(1000);
    });
    $(window).resize(function(){
		var screenWidth = $(window).width();
		if(screenWidth > 768){

		$(".navBar ul").removeAttr("style");
		}
	});
    
    $(".slider-img").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dotsContainer: true

    });
    
});
//marketing slider
$(document).ready(function(){
    $(".new-owl").owlCarousel({
        loop: true,
        items : 3,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dotsContainer: true,
        responsiveClass:true,//Set AutoPlay to 3 seconds
        responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        1000:{
            items:3
        }
    }
        
    });
});

//logo slider
$(document).ready(function(){
    $('.lg-slider').owlCarousel({
    margin:60,
    loop:true,
    items:5,
    autoHeight:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass:true,
    responsive:false,
        responsiveClass:true,//Set AutoPlay to 3 seconds
        responsive:{
        0:{
            items:1
            
        },
        300:{
             items:2
        },
        500:{
            items:3
        },
        800:{
            items:4
        },    
        1000:{
            items:5
        }
    }
});
});
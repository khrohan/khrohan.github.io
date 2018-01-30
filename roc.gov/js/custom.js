//marketing slider
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      animateOut: 'fadeOut',
      autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        dotsContainer: true,
      nav:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },

          1000:{
              items:1
          }
      }
  });

});
$(document).ready(function(){
  $(".bar").click(function(){
        $(".nav-ul").slideToggle(1000);
    });
    $(window).resize(function(){
		var screenWidth = $(window).width();
		if(screenWidth > 900){

		$(".nav-ul").removeAttr("style");
		}
	});
});

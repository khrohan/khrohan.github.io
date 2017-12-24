$(document).ready(function(){
    $(".logo-box .bar").click(function(){
        $(".menu-nav ul").slideToggle(1000);
    });
    $(window).resize(function(){
		var screenWidth = $(window).width();
		if(screenWidth > 768){

		$(".menu-nav ul").removeAttr("style");
		}
	});
});
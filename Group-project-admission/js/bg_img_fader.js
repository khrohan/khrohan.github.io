$(document).ready(function(){
	var count = 0;
	var images = ["fader_image/dhaka.jpg","fader_image/jahangirnagar.jpg","fader_image/khulna.jpg","fader_image/rajshahi.jpg"];
	var image = $(".fader");

	image.css("background-image","url("+images[count]+")")

	setInterval(function(){
		image.fadeOut(500, function(){
			image.css("background-image", "url("+images[count++]+")");
			image.fadeIn(500);
		});
		if(count == images.length){
			count = 0;
		}
	},5000);

});
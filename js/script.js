var slider = $('.bxslider').bxSlider({
	pagerCustom: '#bx-pager'
});

$('#slider-next').click(function(){
  slider.goToNextSlide();
});

$('#slider-prev').click(function(){
  slider.goToPrevSlide();
});


//#66ff66 = vert
//#ff4d4d = rouge

$(".false").click(function () {
    $(this).css({"background-color": "#ff4d4d", "color": "#000"});
});

$(".true").click(function () {
    $(this).css({"background-color": "#66ff66", "color": "#000"});
});
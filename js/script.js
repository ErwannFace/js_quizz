var inc = 1;

var slider = $('.bxslider').bxSlider({
	pagerCustom: '#bx-pager',
	speed: 250,
});

$('#slider-next').click(function(){
  inc++;
  if (inc > 10){
  	inc = 1;
  }
  slider.goToNextSlide();
  $(".count").text("Page " + inc + "/10");
});

$('#slider-prev').click(function(){
  inc--;
  if (inc < 1){
  	inc = 10;
  }
  slider.goToPrevSlide();
  $(".count").text("Page " + inc + "/10");
});


//#66ff66 = vert
//#ff4d4d = rouge

$(".false").click(function () {
    $(this).css({"background-color": "#ff4d4d", "color": "#000", "font-weight": "400"});
});

$(".false-spe").click(function () {
    $(this).css({"background-color": "#ff4d4d", "color": "#000", "font-weight": "400"}).append(" : Non, mais j'ai un prénom sinon... !");
});

$(".true").click(function () {
    $(this).css({"background-color": "#66ff66", "color": "#000", "font-weight": "400"}).append(" : Félicitation !");
});

$("#particle").particleground({
	dotColor: '#f2f2f2',
    lineColor: '#f2f2f2',
    parallax: true,
	parallaxMultiplier: 5,
});
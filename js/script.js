$(document).ready(function () {
     var score = 0;
$(".false").click(function () {
    $(this).css("background", '#B26755');
});
$(".good").click(function () {
    $(this).css("background", '#55B270');
    score ++
    $(".Felicitations").html('Vous avez     '+ score +'/10');

});




var numQuestion = 1;
var a = "#quest";
var b = a + numQuestion;


$(".suivant").click(function(){
	$(b).css("display","none");
	numQuestion++;
	b = a + numQuestion;
	$(b).css("display", "block");
});

$(".precedent").click(function(){
	$(b).css("display","none");
	numQuestion--;
	b = a + numQuestion;
	$(b).css("display","block");
});
    });
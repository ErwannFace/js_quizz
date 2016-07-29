$(document).ready(function(){

//affichage

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


//clic sur les réponses
var score = 0;

$(".answers").click(function(){
	if ($(this).hasClass("right")) {
		$(this).css("background-color","#006600");
		$(this).css("color","white");
		score ++;
	}

	else {
		$(this).css("background-color","#b30000");
		$(this).css("color","white");
	}
});

//le score ne s'incrémente pas en dehors de mon if ?!
$(".displayResult").append(score + " points");

//en fait, ça marche pas comme prévu... dsl
$(".startOver").click(function(){
	score = 0;
	$(".answers").css("background-color", "#e6ffff");
	$("p", "div").css("color","#333");
	$("#quest11").css("display","none");
	$("#quest1").css("display","block");

})

});
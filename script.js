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
})

});
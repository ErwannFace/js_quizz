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
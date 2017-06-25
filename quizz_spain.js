

$( document ).ready(function(){

$(".correcto").hide();
$(".ohhh").hide();
$(".pregunta").hide();
$(".pregunta:first").show();


$("button:first").on("click", function(){
	
	if ($( "input:checked" ).val() == "true") {
		$(".correcto").show();
			} else {
		$(".ohhh").show();
			}

		});

$("button:last").on("click", function(){
		$(".correcto").hide();
		$(".ohhh").hide();
		$(".pregunta:first").hide();
		$(".pregunta:first").next().show();
	
		});

		});
};

           var totalQuestions = 5;

	var n = $(".pregunta").data();

	for (n = 1, n <= totalQuestions, n++) {
		$("button:last").on("click", function(){

			$(".correcto").hide();
			$(".ohhh").hide();

			$(".pregunta").data(n).hide();
                            $(".pregunta").data(n+1).show();

 });

}

$("#continuar").click(function(){

		$(".correcto").hide();
		$(".ohhh").hide();  	    
	    $('.current').removeClass('current').hide()
    	    .next().show().addClass('current');
        	    if ($('.current').hasClass('last')) {
            	$('#continuar').hide();
            	$('#comprobar').hide();
            	$(".final").show();
            	$("h1").hide();
            }	
			$('.actual').trigger("reset");
		});	

}
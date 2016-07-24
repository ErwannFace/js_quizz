$(function(){
	$(".anser").click (function(){
		if ($(".anser").val() == $("#anser1")) {
			$(".anser").css("border-color","green");
		} else{
			$(".anser").css("border-color","red");
		};
		$("#Suivant").click(function(){
			$("#question1").hide();
			$("#question2").show();
		});
	
	});

});

/*  $("h1").click(function(){
        $(this).hide();
    });*/
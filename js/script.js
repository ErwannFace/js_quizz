$(function(){

	// question1

	$(".anser").click (function(){
		if($(this).val() == $("#anser1").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    	$(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };
		$("#Suivant").click(function(){
			$("#question1").hide(); // faire disparaitre la question 1
			$("#question2").show(); // faire apparaitre la question 2
		});
	
	});


	// question2

	$(".anserQuestion2").click (function(){
		if($(this).val() == $("#Q2Choix3").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    $(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };
		$("#Suivant2").click(function(){
			$("#question2").hide(); // faire disparaitre la question 2
			$("#question3").show(); // faire apparaitre la question 3
		});

		$("#Precedent2").click(function(){
			$("#question2").hide(); // faire disparaitre la question 2
			$("#question1").show(); // faire apparaitre la question 1
		});
	
	});

	// question3

	$(".anserQuestion3").click (function(){
		if($(this).val() == $("#Q3Choix2").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    $(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };
		$("#Suivant3").click(function(){
			$("#question3").hide(); // faire disparaitre la question 
			$("#question4").show(); // faire apparaitre la question 
		});

		$("#Precedent3").click(function(){
			$("#question3").hide();
			$("#question2").show();
		});
	
	});

		// question4

	$(".anserQuestion4").click (function(){
		if($(this).val() == $("#Q4Choix4").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    $(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };
		$("#Suivant4").click(function(){
			$("#question4").hide(); // faire disparaitre la question 
			$("#question5").show(); // faire apparaitre la question 
		});

		$("#Precedent4").click(function(){
			$("#question4").hide();
			$("#question3").show();
		});
	
	});

		// question5

	$(".anserQuestion5").click (function(){
		if($(this).val() == $("#Q5Choix3").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    	$(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };
		$("#Suivant5").click(function(){
			$("#question5").hide(); // faire disparaitre la question 
			$("#question6").show(); // faire apparaitre la question 
		});

		$("#Precedent5").click(function(){
			$("#question5").hide();
			$("#question4").show();
		});
	
	});

		// question6

	$(".anserQuestion6").click (function(){
		if($(this).val() == $("#Q6Choix2").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    $(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };
		$("#Suivant6").click(function(){
			$("#question6").hide(); // faire disparaitre la question 
			$("#question7").show(); // faire apparaitre la question 
		});

		$("#Precedent6").click(function(){
			$("#question6").hide();
			$("#question5").show();
		});
	
	});

		// question7

	$(".anserQuestion7").click (function(){
		if($(this).val() == $("#Q7Choix1").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    	$(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };
		$("#Suivant7").click(function(){
			$("#question7").hide(); // faire disparaitre la question 
			$("#question8").show(); // faire apparaitre la question 
		});

		$("#Precedent7").click(function(){
			$("#question7").hide();
			$("#question6").show();
		});
	
	});

		// question8

	$(".anserQuestion8").click (function(){
		if($(this).val() == $("#Q8Choix4").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    	$(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };
		$("#Suivant8").click(function(){
			$("#question8").hide(); // faire disparaitre la question 
			$("#question9").show(); // faire apparaitre la question 
		});

		$("#Precedent8").click(function(){
			$("#question8").hide();
			$("#question7").show();
		});
	
	});

		// question9

	$(".anserQuestion9").click (function(){
		if($(this).val() == $("#Q9Choix1").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    	$(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };
		$("#Suivant9").click(function(){
			$("#question9").hide(); // faire disparaitre la question 
			$("#question10").show(); // faire apparaitre la question 
		});

		$("#Precedent9").click(function(){
			$("#question9").hide();
			$("#question8").show();
		});
	
	});

		// question10

	$(".anserQuestion10").click (function(){
		if($(this).val() == $("#Q10Choix3").val()){ // si le choix est bon

        $(this).css({ // on rend le champ vert

        borderColor : 'green',
       	 });
    	} else{

    	$(this).css({ // si la réponse est bonne, on le rend rouge

        borderColor : 'red',
    });

    };

		$("#Precedent10").click(function(){
			$("#question10").hide();
			$("#question9").show();
		});
		alert ("Bravo vous avez fini !!!!");
	
	});

});

	
/*  $("h1").click(function(){
        $(this).hide();
    });*/
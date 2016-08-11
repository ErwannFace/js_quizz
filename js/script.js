var all_qst = [qst1, qst2, qst3, qst4, qst5, qst6, qst7, qst8, qst9, qst10];

function display_qst(question) {
	$("h2").html(question[0]);
	$("tr:first td:first").html(question[1]);
	$("tr:first td:last").html(question[2]);
	$("tr:last td:first").html(question[3]);
	$("tr:last td:last").html(question[4]);
};


var index = 0;

/* /Display functions\ */
display_qst(all_qst[index]);

function display_qst(question) {
	$("h2").html(question[0]);
	$("tr:first td:first").html(question[1]);
	$("tr:first td:last").html(question[2]);
	$("tr:last td:first").html(question[3]);
	$("tr:last td:last").html(question[4]);
}

$("button:first").click(function previous_qst() {
	if (index != 0) {
		index--;
		display_qst(all_qst[index]);
	}
});

$("button:last").click(function next_qst() {
	if (index < all_qst.length-1) {
		index++;
		display_qst(all_qst[index]);
	}
});
/* \Display functions/ */

$("td").click(function check_answer() {
	var current_question = all_qst[index];
	var right_answer_index = current_question[5];
	var right_answer = current_question[right_answer_index];
	var user_answer = $(this).html();
	
	if (right_answer == user_answer) {
		this.style.background = "green";
	}
	
	else {
		this.style.background = "red";
	}
});
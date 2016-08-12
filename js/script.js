var index = 0;
var answers = [];
answers.length = all_qst.length;

/* /Display functions\ */
display_qst(all_qst[index]);

function display_qst(question) {
	$("h2").html(question[0]);
	$("tr:first td:first").html(question[1]);
	$("tr:first td:last").html(question[2]);
	$("tr:last td:first").html(question[3]);
	$("tr:last td:last").html(question[4]);
	$("td").css("background-color", "transparent");
	
	check_answer();
}

$("button:first").click(function previous_qst() {
	if (index != 0) {
		index--;
		display_qst(all_qst[index]);
	}
});

$("button:last").click(function next_qst() {
	if (index < all_qst.length - 1) {
		index++;
		display_qst(all_qst[index]);
	}
});
/* \Display functions/ */


$("td").click(function () {
	store_answer(this);
	check_answer();
	if (answers_full()) {
		set_score();
	}
});

//store the user answer in a array
function store_answer(target) {
	if (!answers[index]) {
		answers[index] = $(target).html();
		console.log(answers);
	}
}

function check_answer() {
	var current_question = all_qst[index];
	var right_answer_index = current_question[5]; //returns integer
	var right_answer = current_question[right_answer_index];
	var user_answer = answers[index];
	//Search the user answer in the table,
	for (var i = 0 ; i < $("td").length ; i++) {
		var x = $("td")[i];
		if ($(x).html() == user_answer) {
			//Compare the user answer with the right answer,
			//Color the background green is is answer is correct...
			if (user_answer == right_answer) {
				$(x).css("background-color", "green");	
			}
			//...Or red if not
			else {
				$(x).css("background-color", "red");	
			}
		}
	}
}

function answers_full() {
	for (var i = 0 ; i < answers.length ; i++) {
		if (answers[i] == undefined) {
			return false;
		}
	}
	return true;
}

function set_score() {
	alert("score");
}
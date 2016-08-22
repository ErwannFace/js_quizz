var index = 0;
var answers = [];
answers.length = all_qst.length;
var score = 0;
var progress = 1;
var current_question;
var right_answer_index;
var right_answer;
var user_answer;

/* /Display functions\ */
$("h1").html(title);
display_qst(all_qst[index]);

function display_qst(question) {
	current_question = all_qst[index];
	right_answer_index = current_question[5]; //returns integer
	right_answer = current_question[right_answer_index];
	user_answer = answers[index];
	$("h2").html(question[0]);
	$("tr:first td:first").html(question[1]);
	$("tr:first td:last").html(question[2]);
	$("tr:last td:first").html(question[3]);
	$("tr:last td:last").html(question[4]);
	$("td").css("background-color", "transparent");
	$("p:first").html(index+1 + "/" + all_qst.length);
	$("p:last").html("Score: " + score);
	
	check_answer();
	
	//Disable the 'previous' button if the first question is displayed
	if (index == 0) {
		$("button:first").attr("disabled", true);
	}
	else {
		$("button:first").attr("disabled", false);	
	}
	//Disable the 'next' button if the last question is displayed
	if (index == all_qst.length-1) {
		$("button:last").attr("disabled", true);
	}
	else {
		$("button:last").attr("disabled", false);	
	}
}

$("button:first").click(function previous_qst() {
	index--;
	display_qst(all_qst[index]);
});

$("button:last").click(function next_qst() {
	index++;
	display_qst(all_qst[index]);
});
/* \Display functions/ */

$("td").click(function () {
	store_answer(this);
	check_answer();
	all_answered();
});

//store the user answer in a array
function store_answer(target) {
	if (!answers[index]) {
		answers[index] = $(target).html();
		//count the score and display it
		user_answer = answers[index];
		set_score();
		display_qst(all_qst[index]);
	}
}

function check_answer() {
	//Search the user answer in the table,
	for (var i = 0 ; i < $("td").length ; i++) {
		var x = $("td")[i];
		if ($(x).html() == user_answer) {
			//Color the background green is is answer is correct...
			if (user_answer == right_answer) {
				$(x).css("background-color", "#5CB85C");	
			}
			//...Or red if not
			else {
				$(x).css("background-color", "#D9534F");	
			}
		}
	}
}

//Alert the user when all the questions have been answered
function all_answered() {
	for (var i = 0 ; i < answers.length ; i++) {
		if (answers[i] == undefined) {
			return false;
		}
	}
	alert("Nice, you completed the quizz =)!");
}

//Increase the score when a correct answer is given
function set_score() {
		if (right_answer == user_answer) {
		score++;
	}
}

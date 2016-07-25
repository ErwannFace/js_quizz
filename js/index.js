var question1 = ["En quelle année sera découverte la planète Gong ?",
"2032",
"2042",
"2045",
"2062",
1];
var question2 = ["Que signifie l’acronyme C.O.I.T. ?",
"Collège Officiel des Ingénieurs en Télécommunications",
"Convention Organisée sur l’Industrie Tertiaire",
"Compagnie d’Opéra Invisible du Tibet",
"Collectif pour l’Objectivication des Insectes Tachetés",
3];
var question3 = ["Qu’offre Zero The Hero à manger au chat de Yoni ?",
"une pizza Margherita",
"du fish & chips",
"un Big Kahuna Burger",
"des champignons mexicains",
2];
var question4 = ["",
"",
"",
"",
"",
];
var question5 = ["",
"",
"",
"",
"",
];
var question6 = ["",
"",
"",
"",
"",
];
var question7 = ["",
"",
"",
"",
"",
];
var question8 = ["",
"",
"",
"",
"",
];
var question9 = ["",
"",
"",
"",
"",
];
var question10 = ["",
"",
"",
"",
"",
];

var question;
var questionIndex = 1;

function fillTable() {
	$("#next").attr("disabled", true);
	question = this["question" + questionIndex];
	$("#question").text(question[0]);
	$("#answer1").text(question[1]);
	$("#answer2").text(question[2]);
	$("#answer3").text(question[3]);
	$("#answer4").text(question[4]);
	if (question.length == 7) {
		$("#" + question[6]).addClass("info");
		var answerId = "answer" + question[5];
		$(".info").map(function() {
			$(this).removeClass("info");
			if (this.id == answerId) {
				$(this).addClass("success");
			} else {
				$(this).addClass("danger");
			}
		});
		if (questionIndex < 10) {
			$("#next").attr("disabled", false);
		}
	}
}

$("#next").click(function() {
	resetAnswers();
	questionIndex++;
	fillTable();
	if (questionIndex == 10) {
		$("#next").attr("disabled", true);
	}
	if (questionIndex >= 2) {
		$("#previous").attr("disabled", false);
	}
});

$("#previous").click(function() {
	resetAnswers();
	questionIndex--;
	fillTable();
	if (questionIndex == 1) {
		$("#previous").attr("disabled", true);
	}
	if (questionIndex <= 9) {
		$("#next").attr("disabled", false);
	}
});

$(".answer").click(function() {
	if (question.length == 7) {return;}
	resetAnswers();
	$(this).addClass("info");
	$("#validate").attr("disabled",false);
});

$("#validate").click(function() {
	var answerId = "answer" + question[5];
	$(".info").map(function() {
		question.push(this.id);
		$(this).removeClass("info");
		if (this.id == answerId) {
			$(this).addClass("success");
		} else {
			$(this).addClass("danger");
		}
	});
	if (questionIndex <= 9) {
		$("#next").attr("disabled", false);
	}
	if (questionIndex >= 2) {
		$("#previous").attr("disabled", false);
	}
	$("#validate").attr("disabled",true);
});

function resetAnswers() {
	$(".answer").map(function() {
		$(this).removeClass("info");
		$(this).removeClass("success");
		$(this).removeClass("danger");
	});
}

fillTable();

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
var question4 = ["Quel est l’intrus dans cette liste ?",
"Bloomdido Bad De Grass",
"Dingo Virgin",
"Francis Bacon",
"Steve Hillage",
4];
var question5 = ["Dans quel véhicule circulent les extra-terrestes ?",
"des soucoupes volantes",
"des saucières volantes",
"des théières volantes",
"des soupières volantes",
3];
var question6 = ["Quelle est la profession de Sélène ?",
"prostituée",
"professeure",
"prêtresse",
"princesse",
1];
var question7 = ["Comment communiquent les gnomes ?",
"par télépathie",
"par une radio pirate",
"par signaux de fumée",
"par un langage connu d’eux seuls",
2];
var question8 = ["Terminez cettte phrase : BANANA NIRVANA …",
"MANANA",
"ANANDA",
"ANACONDA",
"BANANA",
1];
var question9 = ["De quelle planète est originaire Zero The Heor",
"Gong",
"Kobaïa",
"la Terre",
"Mars",
3];
var question10 = ["Mais, au fait, quelle est la thématique de ce quizz ?",
"Gong, le meilleur groupe de rock progressif de tous les temps !",
"ne cliquez pas ici",
"ceci est une mauvaise réponse",
"non, franchement, la bonne réponse est la première",
1];

var question;
var questionIndex = 1;

function fillTable() {
	$("#next").attr("disabled", true);
	$("#next").removeClass("btn-primary");
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
			$("#next").addClass("btn-primary");
		}
	}
}

$("#next").click(function() {
	resetAnswers();
	questionIndex++;
	fillTable();
	if (questionIndex == 10) {
		$("#next").attr("disabled", true);
		$("#next").removeClass("btn-primary");
	}
	if (questionIndex >= 2) {
		$("#previous").attr("disabled", false);
		$("#previous").addClass("btn-primary");
	}
});

$("#previous").click(function() {
	resetAnswers();
	questionIndex--;
	fillTable();
	if (questionIndex == 1) {
		$("#previous").attr("disabled", true);
		$("#previous").removeClass("btn-primary");
	}
	if (questionIndex <= 9) {
		$("#next").attr("disabled", false);
		$("#next").addClass("btn-primary");
	}
});

$(".answer").click(function() {
	if (question.length == 7) {return;}
	resetAnswers();
	$(this).addClass("info");
	$("#validate").attr("disabled",false);
	$("#validate").addClass("btn-success");
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
	if (questionIndex < 10) {
		$("#next").attr("disabled", false);
		$("#next").addClass("btn-primary");
	}
	if (questionIndex > 1) {
		$("#previous").attr("disabled", false);
		$("#previous").addClass("btn-primary");
	}
	$("#validate").attr("disabled",true);
	$("#validate").removeClass("btn-success");
});

function resetAnswers() {
	$(".answer").map(function() {
		$(this).removeClass("info");
		$(this).removeClass("success");
		$(this).removeClass("danger");
	});
}

fillTable();

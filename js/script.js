// inscrivez le nombre de question dans votre quizz ici
var nbQuestion = 10;
// passer les questions
var next = 1;
// score du quizzer :)
var score = 0;

function limitSkip() {
    if (next == nbQuestion + 2) {
        next = nbQuestion;
    } else if (next == 0) {
        next = 1;
    }
    if (next == nbQuestion + 1) {
        $("#score").text(score);
        $("#scoreTotal").text(nbQuestion);
    }
}

function nextQuestion() {
    $("#Q" + next + "").css({
        "display": "none"
    });
    next++;
    limitSkip();
    $("#Q" + next + "").css({
        "display": "block"
    });
}

// inutile depuis l'ajout du timeout
/*$("#next").click(function () {
    $("#Q" + next + "").css({
        "display": "none"
    });
    next++;
    limitSkip();
    $("#Q" + next + "").css({
        "display": "block"
    });
});

$("#last").click(function () {
    $("#Q" + next + "").css({
        "display": "none"
    });
    next--;
    limitSkip();
    $("#Q" + next + "").css({
        "display": "block"
    });
});*/

$(".ans-good").click(function () {
    score++;
    $("#Q" + next + " td").css({
        "background-color": "white",
        "color": "black"
    });
    $(this).css({
        "background-color": "green",
        "color": "white"
    });
    setTimeout(function () {
        nextQuestion();
    }, 600);
});

$(".ans-bad").click(function () {
    $("#Q" + next + " td").css({
        "background-color": "white",
        "color": "black"
    });
    $(this).css({
        "background-color": "red",
        "color": "white"
    });
    setTimeout(function () {
        nextQuestion();
    }, 600);
});
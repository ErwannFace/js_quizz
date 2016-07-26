$(document).ready(function () {
     var score = 0;
$(".false").click(function () {
    $(this).css("background", 'red');
});
$(".good").click(function () {
    $(this).css("background", 'green');
    score ++;
    $(".Felicitations").html('Vous avez ' + score + ' / 10 !');
});
$(".Felicitations").html('Vous avez ' + score + ' / 10 !');
});



function questionSuivante1() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "block");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}
function questionSuivante2() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "block");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}

function questionSuivante3() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "block");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}

function questionSuivante4() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "block");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}
function questionSuivante5() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "block");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}

function questionSuivante6() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "block");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}

function questionSuivante7() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "block");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}

function questionSuivante8() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "block"); $("#question10").css("display", "none");

}

function questionSuivante9() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "block");

}

function questionPrecedente2() {
    $("#question1").css("display", "block");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}

function questionPrecedente3() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "block");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}
function questionPrecedente4() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "block");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}
function questionPrecedente5() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "block");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}
function questionPrecedente6() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "block");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}
function questionPrecedente7() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "block");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}
function questionPrecedente8() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "block");
    $("#question8").css("display", "none");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}
function questionPrecedente9() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "block");
    $("#question9").css("display", "none"); $("#question10").css("display", "none");

}
function questionPrecedente10() {
    $("#question1").css("display", "none");
    $("#question2").css("display", "none");
    $("#question3").css("display", "none");
    $("#question4").css("display", "none");
    $("#question5").css("display", "none");
    $("#question6").css("display", "none");
    $("#question7").css("display", "none");
    $("#question8").css("display", "none");
    $("#question9").css("display", "block"); $("#question10").css("display", "none");
}

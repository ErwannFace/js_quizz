var i = 1;
var j = 2;
var answer = false;
var score = 0;
var progress = 0;

//button next: hide ongoing question and show the next one.
$("#next").click(function () {
    if (j < 12) {
        $("#" + i).hide();
        $("#" + j).show();
        i++;
        j++;
        answer = false;
        affich_progres();
    }
    //Show score when you passed all the questions
    if (j == 12) {
        affich_score();
    }
});

//button previous: show previous question and hide the ongoing one.
$("#previous").click(function () {
    if (i > 1) {
        i--;
        j--;
        $("#" + i).show();
        $("#" + j).hide();
        answer = true;
        affich_progres();
    }
});

//Correct answer clicked --> green background
function answer_right(target) {
    if (answer === false) {
        target.style.background = "green";
        answer = true;
        score++;
    }
};

//Wrong question clicked --> red background
function answer_false(target) {
    if (answer === false) {
        target.style.background = "red";
        answer = true;
    }
};

//Display functions 
function affich_progres() {$("p").text("Question " + i + "/10");};
function affich_score() {$("#" + i).text("Votre score: " + score + "/10");};
//var for display qst
var i = 1; //ongoing question
var j = 2; //next question


var answer = false; //true: you answered the question
var score = 0; //how many right answer you have
var click_previous = 0; //count the number of time you click previous

//button next: hide ongoing question and show the next one.
$("#next").click(function () {
    if (j < 12 && answer === true) {
        $("#" + i).hide();
        $("#" + j).show();
        i++;
        j++;
        //you can only answer a question if click_previous equals zero
        if (click_previous == 0) {answer = false}
        else {click_previous--;}
        
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
        click_previous++;
        //show progress
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
function affich_progres() {
    if (i < 11) {
        $("p").text("Question " + i + "/10");
    }
};

function affich_score() {$("#" + i).text("Votre score: " + score + "/10");};
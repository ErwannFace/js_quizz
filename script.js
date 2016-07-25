var i = 1;
var j = 2;
var answer = false;
var score = 0;

$("#next").click(function () {
    if (j < 12) {
        $("#" + i).hide();
        $("#" + j).show();
        i++;
        j++;
        answer = false;
    }
    if (j == 11) {
        $("#" + i).text(score + "/10");
    }
});
$("#previous").click(function () {
    if (i > 1) {
        i--;
        j--;
        $("#" + i).show();
        $("#" + j).hide();
        answer = true;
    }
});

function answer_right(target) {
    if (answer === false) {
        target.style.background = "green";
        answer = true;
        score++;
    }
}

function answer_false(target) {
    if (answer === false) {
        target.style.background = "red";
        answer = true;
    }
};
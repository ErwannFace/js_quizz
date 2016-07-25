var i = 1;
var j = 2;
var answer = false;
$("#next").click(function () {
    if (j < 11 && answer === true) {
        $("#" + i).hide();
        $("#" + j).show();
        i++;
        j++;
        answer = false;
    }
});
$("#previous").click(function () {
    if (i > 1) {
        i--;
        j--;
        $("#" + i).show();
        $("#" + j).hide();
    }
});

function answer_right(target) {
    if (answer === false) {
        target.style.background = "green";
        answer = true;
    }
}

function answer_false(target) {
    if (answer === false) {
        target.style.background = "red";
        answer = true;
    }
};
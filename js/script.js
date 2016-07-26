// passer les questions
var next = 1;

function limitSkip() {
    if (next == 11) {
        next = 10;
    } else if (next == 0) {
        next = 1;
    }
}

$("#next").click(function () {
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
});

$(".ans-good").click(function () {
    $("#Q" + next + " td").css({
        "background-color": "white",
        "color": "black"
    });
    $(this).css({
        "background-color": "green",
        "color": "white"
    });
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
});
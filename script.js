var i = 1;
var j = 2;

$("#next").click(function() {
    $("#" + i).hide();
    $("#" + j).show();
    i++;
    j++;
});

$("#previous").click(function() {
    i--;
    j--;
    $("#" + i).show();
    $("#" + j).hide();
});

function answer_right(target) {
    target.style.background="green";
}

function answer_false(target) {
    target.style.background="red";
};
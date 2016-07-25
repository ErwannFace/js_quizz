var i = 1;
var j = 2;

function next_question() {
    document.getElementById(i).style.display="none";
    document.getElementById(j).style.display="block";
    i++;
    j++;
};

function previous_question() {
    i--;
    j--;
    document.getElementById(i).style.display="block";
    document.getElementById(j).style.display="none";
}

function answer_true() {
    document.getElementById("vrai"i).style.background="green";
};
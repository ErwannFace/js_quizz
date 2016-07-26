
var score = 0;
var multi = 1;

/*//fontion + 1 en cliquant sur le cookie
function clicker() {
    score = score + multi
    document.getElementById("score").innerHTML = score;
}*/


//fontion ajout de point + le multiplicateur
function clicker() {
    score = score + multi
    document.getElementById("score").innerHTML = "Points " + score;
} 



//fontion * 2 bouton multiplicateur, si assez de point pour le payer
function incrementer() {
    var prix = 5 * multi;
    if (score >= prix) {
        multi = multi * 2;
        score = score - prix;
    document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + multi;
    document.getElementById("prix").innerHTML= "Prix " + 5 * multi;
    document.getElementById("score").innerHTML = "Points " + score;
    }

    else {
        alert("Va t'acheter de l'argent !");
    }
}







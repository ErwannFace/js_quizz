//Pour les mauvaises réponse.
function faux() {
	var erreur = document.getElementsByClassName("faux");
    var i;
    for (i = 0; i < erreur.length; i++) {
    	//changement de couleur en rouge quand la réponse est fausse.
        erreur[i].style.backgroundColor = "rgba(255,184,184,0.5)";
        //devoile la bonne réponse en vert.
        var reponse = document.getElementsByClassName("vrai");
        reponse[0].style.backgroundColor = "rgba(51,255,51,0.4)";
        //permet une transition plus douce.
        erreur[i].style.transitionDuration = "2s";
        reponse[0].style.transitionDuration = "2s"
    }
}

//Pour la bonne réponse.
function vrai() {
	var reponse = document.getElementsByClassName("vrai");
		//changement de couleur en vert quand la réponse est vrai.
        reponse[0].style.backgroundColor = "rgba(51,255,51,0.3)";
        //permet une transition plus douce.
        reponse[0].style.transitionDuration = "2s"
}




//Afficher question suivante.
function questionSuivante1() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="block";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionSuivante2() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="block";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionSuivante3() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="block";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionSuivante4() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="block";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionSuivante5() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="block";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionSuivante6() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="block";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionSuivante7() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="block";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionSuivante8() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="block";
	document.getElementById("question10").style.display="none";
}

function questionSuivante9() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="block";
}



//Afficher question précédente.
function questionPrecedente2() {
	document.getElementById("question1").style.display="block";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionPrecedente3() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="block";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionPrecedente4() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="block";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionPrecedente5() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="block";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionPrecedente6() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="block";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionPrecedente7() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="block";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionPrecedente8() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="block";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionPrecedente9() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="block";
	document.getElementById("question9").style.display="none";
	document.getElementById("question10").style.display="none";
}

function questionPrecedente10() {
	document.getElementById("question1").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("question3").style.display="none";
	document.getElementById("question4").style.display="none";
	document.getElementById("question5").style.display="none";
	document.getElementById("question6").style.display="none";
	document.getElementById("question7").style.display="none";
	document.getElementById("question8").style.display="none";
	document.getElementById("question9").style.display="block";
	document.getElementById("question10").style.display="none";
}
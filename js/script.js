/*Link tutoriel : https://www.youtube.com/watch?v=d_UuOVhuCF8*/
/*Initialisation des différentes variables*/

var pos = 0, test, test_status, question, reponse, reponses, r1, r2, r3, r4, correct=0;

/*Création des questions*/

var questions = [

	["Dans quelle série joue Kerry Washington ?", "The Blacklist", "Scandal", "Triple 9", "Arrow", "2"],
	["Qui incarne le rôle de Franck Underwood dans House of Cards ?", "Patrick Dempsey", "Kevin Hart", "Al Pacino", "Kevin Spacey", "4"],
	["Qui a remplacé DSK à la présidence du FMI ?", "Michel Alliot-Marie", "Michel Sapin","Chrisitine Lagarde","Christine Taubira", "3" ],
	["Où se trouve Wallis-et-Futuna ?", "Pacifique Sud", "Antilles", "Mer des Caraïbes", "Océan Indien", "1"],
	["Quel est le fondateur de Snapchat ?", "Xavier Niel", "Evan Spieggle", "Adolf Dassler", "Eric Cantona", "Brarack Obama","2"],
	["Quel est la capital du Brésil ?", "Sao Paulo", "Brasilia", "Rio de Janeiro", "Sao Luis","1"],
	["Qui est le président de la Fondation Face ?", "Sébastien Ramos", "Mark Zuckerberg", "Gérard MESTRALLET", "Alain ROUMILHAC", "3"],
	["Quel est le pays le plus pauvres ?", "Mongolie", "Kirghizstan", "Jamaïque", "Bénin", "2"],
	["Dans quel état des Etats-Unis se trouve Chicago ?", "Mineapolis", "Missouri", "Pennsylvanie", "Illinois", "4"],
	["Où est né Brarack Obama ?", "Kinshasa", "Honolulu", "Naïrobi", "Los Angeles", "2"],

];
/*Simplification du document.getElementById(x) */
function _(x){
	return document.getElementById(x);
}
function RendreQuestion(){

	console.log(RendreQuestion);
	test = _("test");

	if (pos>= questions.length){
		test.innerHTML = "<h2>Vous avez "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Quizz terminé !!";
		pos = 0;
		correct = 0;
		return false;
	}

	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	r1 = questions[pos][1];
	r2 = questions[pos][2];
	r3 = questions[pos][3];
	r4 = questions[pos][4];
	test.innerHTML ="<h3>"+question+"</h3>";
	test.innerHTML +="<button id='reponses' value='1'> "+r1+"<br>";
	test.innerHTML +="<button id='reponses' value='2'> "+r2+"<br>";
	test.innerHTML +="<button id='reponses' value='3'> "+r3+"<br>";
	test.innerHTML +="<button id='reponses' value='4'> "+r4+"<br><br>";
	
}

function checkAnswer(){

		console.log(checkAnswer);
	reponses = _("reponses");
	for (var i=0; i<reponses.length; i++){
		if (reponses[i].onclick){
			reponse = reponses[i].value;
		}
	}
	if (reponse == questions[pos][10]){
		correct++;
	}
	pos++;
	RendreQuestion();
}
function ReturnQ(){
	console.log(ReturnQ);
	reponses = document.getElementById("reponses");
	for (var i=0; i>reponses.length; i++){
		if (reponses[i].checked){
			reponse = reponses[i].value;
		}
	}
	if (reponse == questions[pos][10]){
		correct++;
	}
	pos--;
	RendreQuestion();
}
window.addEventListener("load", RendreQuestion, false);
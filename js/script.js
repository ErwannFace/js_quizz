/*Initialisation des différentes variables*/

var pos = 0, questions, Name_Question, reponseQ, r1, r2, r3, r4, correct=0;



/*Création des questions*/

var questions = [

	["Dans quel série joue Kerry Washington ?", "The Blacklist", "Scandal", "Triple 9", "House of Cards", "2"],
	["Qui incarne le rôle de Franck Underwood dans House of Cards ?", "Patrick Dempsey", "Kevin Hart", "Al Pacino", "Kevin Spacey", "4"],
	["Qui a remplacé DSK à la présidence du FMI ?", "Michel Alliot-Marie", "Michel Sapin","Chrisitine Lagarde","Christine Taubira", "3" ],
	["Où se trouve Wallis-et-Futuna ?", "Pacifique Sud", "Antille", "Mer des Caraïbes", "Océan Indien", "r1"]
	["Quel est le fondateur de Snapchat ?", "Janus Friis/Niklas Zennström", "Evan Spieggle", "Adolf Dassler", "Eric Cantona"],
];

function rendreQuestion(){
	Name_Question = document.getElementById("NameQuestion");

	document.getElementById("NumberQuestion").innerHTML = "questions "+(pos+1)+" of "+ questions.length;
	questions = questions[pos][0];
		r1 = questions[pos][1];
		r2 = questions[pos][2];
		r3 = questions[pos][3];
		r4 = questions[pos][4];
	NameQuestion.innerHTML = "<h3>"+questions+"</h3>";
	NameQuestion.innerHTML += "<td "name="reponseQ" value="1"> "+r1+"<br>";
	NameQuestion.innerHTML += "<td "name="reponseQ" value="2"> "+r2+"<br>";
	NameQuestion.innerHTML += "<td "name="reponseQ" value="3"> "+r3+"<br>";
	NameQuestion.innerHTML += "<td "name="reponseQ" value="4"> "+r4+"<br><br>";
	NameQuestion.innerHTML ="<button type="button" class="btn btn-primary btn-lg onclick="CheckAnswer()" id="next">Next</button>";
}	 
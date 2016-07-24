/*Initialisation des différentes variables*/

var pos = 0, test, test_status, question, reponse, reponses, r1, r2, r3, r4, correct=0;

/*Création des questions*/

var questions = [

	["Dans quel série joue Kerry Washington ?", "The Blacklist", "Scandal", "Triple 9", "House of Cards", "2"],
	["Qui incarne le rôle de Franck Underwood dans House of Cards ?", "Patrick Dempsey", "Kevin Hart", "Al Pacino", "Kevin Spacey", "4"],
	["Qui a remplacé DSK à la présidence du FMI ?", "Michel Alliot-Marie", "Michel Sapin","Chrisitine Lagarde","Christine Taubira", "3" ],
	["Où se trouve Wallis-et-Futuna ?", "Pacifique Sud", "Antille", "Mer des Caraïbes", "Océan Indien", "r1"]
	["Quel est le fondateur de Snapchat ?", "Janus Friis/Niklas Zennström", "Evan Spieggle", "Adolf Dassler", "Eric Cantona", "Brarack Obama","2"],
];
function _(x){
	return document.getElementById(x);
}
function RendreQuestion(){
	test = _("test");
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos] [0];
	r1 = questions [pos] [1];
	r2 = questions [pos] [2];
	r3 = questions [pos] [3];
	r4 = questions [pos] [4];
	test.innerHTML ="<h3>"+question+"</h3>";
	test.innerHTML +="<p id='reponse' value='1'> "+r1+"<br>";
	test.innerHTML +="<p id='reponse' value='2'> "+r2+"<br>";
	test.innerHTML +="<p id='reponse' value='3'> "+r3+"<br>";
	test.innerHTML +="<p id='reponse' value='4'> "+r4+"<br><br>";
	test.innerHTML += "<button onclick = 'checkAnswer()' >Submit</button>";
}
function checkAnswer(){
	alert("OK we will");
}
window.addEventListener("load", RendreQuestion, false);

var questions = [{
    question: "1. Parmi ces figures, laquelle n'est pas un polygone ?",
    choix: ["Un triangle", "Un pentagone","Un cercle", "Un carré "],
    bonnereponse: 2
}, 
{
    question: "2. Quelle pâtisserie est composée de deux choux posés l'un sur l'autre ?",
    choix: ["Le baba au rhum","Le Saint-Honoré", "La religieuse", "La Tropézienne" ],
    bonnereponse: 2
}, 
{
    question: "3. À quelle région est rattaché le département de la Lozère ?",
    choix: ["La Provence-Alpes-Côte d'Azur", "Midi-Pyrénées", "Le Centre", "Le Languedoc-Roussillon"],
    bonnereponse: 3
}, 
{
    question: "4. Comment appelle-t-on un message électronique intempestif ?",
    choix: ["Elfe","Spam", "Virus", "Cookie "],
    bonnereponse: 1
}, 
{
    question: "5. Dans les Guignols de l’Info, quel sportif est décrié dans le sketch « L’homme de la Mancha » ?",
    choix: ["Rafael Nadal","Andrés Iniesta","Lance Armstrong","Alberto Contador "],
    bonnereponse: 0
},
{
    question: "6. Qui était Arthur Rimbaud ?",
    choix: ["Un poète","Un président","Un danseur","Un boulanger "],
    bonnereponse: 0
}, 
{
    question: "7. Qu'est-ce qu'un sashimi ?",
    choix: ["Un plat de poisson cru","Une épice japonaise","Un insecte volant","Un virus informatique "],
    bonnereponse: 0
}, 
{
    question: "8. Comment appelle-t-on les journaux personnels en ligne ?",
    choix: ["Des éditos", "Des pages","Des blogs","Des tweets"],
    bonnereponse: 2
}, 
{
    question: "9. En espagnol, que signifie le mot corazon ?",
    choix: ["Chorizo","Chemin","Château","Cœur "],
    bonnereponse: 3
},
{
    question: "10. Grâce à quelle ligne détermine-t-on la latitude ?",
    choix: ["Le parallèle","Le méridien","L'Équateur","La médiane "],
    bonnereponse: 2
},
];

var currentQuestion = 0;
var bonnereponse=0;

var quizOver = false;

$(document).ready(function () {

 //afficher la 1ere question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // En cliquant sur suivant, afficher la question suivante
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO:  Retirez tout message - > pas sûr si cela est efficace pour appeler ce à chaque fois
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].bonnereponse) {
                    bonnereponse++;
                }

                currentQuestion++; // Puisque nous avons déjà affiché la première question sur DOM prêt
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
          
                    // Modifier le texte dans le bouton suivant pour demander si l'utilisateur veut jouer à nouveau
                    $(document).find(".nextButton").text("Recommencer");
                    quizOver = true;
                }
            }
        } else { // quiz est terminée et cliqué sur le bouton suivant qui affiche maintenant Play Again
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }

    });
			$(this).find(".previousButton").on("click", function (){
  				currentQuestion--; // Puisque nous avons déjà affiché la première question sur DOM prêt
               
                    displayCurrentQuestion();
               
                
            
			});
//afficher bonne réponse vert et rouge pour le reste
			$(this).find(".validButton").on("click", function (){
			value = $("input[type='radio']:checked").val();
			var x =$('#'+value);
			if (value == questions[currentQuestion].bonnereponse) {
                   
						x.css('background','green'); 
                }
                else{
					x.css('background','red'); 
                }
			});

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".Container > .question");
    var choiceList = $(document).find(".Container > .choiceList");
    var numChoices = questions[currentQuestion].choix.length;

    // Définissez le texte question de classe à la question actuelle
    $(questionClass).text(question);

    // Supprimer tous les éléments <li>
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choix[i];
        $('<li class="col-xs-6" id='+i+'><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
	//$('<div <input type="radio" value=' + i + ' name="dynradio" />' + choice + '</div>').appendTo(choiceList);
    }
}
//$('<div class="col-xs-6"><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</div>').appendTo(choiceList);

function resetQuiz() {
    currentQuestion = 0;
    bonnereponse = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".Container > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".Container > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
var q = $('html');         
q.css('background-size', '100%');
q.css('border-width', '4px');    
q.css('text-align', 'center');

/*var u=('.Container')
u.css('background-color', 'blue');*/

var d =$('.question');
d.css('margin-top','50px');
d.css('font-size','23px')


var s=$('.choiceList');
s.css('padding-bottom','100px')
s.css('border', '2px black');

var l = $('.nextButton');         
l.css('background', 'red');  
l.css('border-style', 'groove'); 
l.css('border-width', '4px');
l.css('float','right');
l.css('margin-top','40px')    

var c = $('.previousButton');          
c.css('background', 'red');  
c.css('border-style', 'groove'); 
c.css('border-width', '4px');
c.css('float','right'); 
//c.css('padding-left','50px')

var t = $('.validButton');
//t.css('width','200px')          
t.css('background', 'green');  
t.css('border-style', 'groove'); 
t.css('border-width', '4px');
t.css('border-width','25px');
t.css('font-size','16px');
//t.css('margin','10px');
//t.css('padding-bottom','5px');
t.css('float', 'right');

var e=$('.footer');
e.css('padding-left','auto');
e.css('background-color','yellow');
e.css('text-align','center');
e.css('height','95px')

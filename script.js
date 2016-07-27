function Quiz(questions) {

    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {

    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {

    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {

    return this.currentQuestionIndex >= this.questions.length;
};

function Question(text, choices, answer) {

    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {

    return this.answer === choice;
};

var QuizUI = {

displayNext: function () {

        if (quiz.hasEnded()) {
            this.displayScore();

        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },

displayQuestion: function() {

        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },

displayChoices: function() {

        var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },

displayScore: function() {

        var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
        this.populateIdWithHTML("quiz", gameOverHTML);
    },
    
populateIdWithHTML: function(id, text) {

        var element = document.getElementById(id);
        element.innerHTML = text;
    },

guessHandler: function(id, guess) {

        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },
    
displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
};
// Questions
var questions = [

    new Question("La réponse est ...", [ "49.3", "22 v'la les kisdés", "Jean-François Copé", "42" ], "42"),

    new Question("Complétez cette citation: n est pas mort ce qui à jamais dort, et au long ds ères ...", ["A ma mort, je souhaite léguer mon corps à la science fiction.", "Peut mourir même la mort.", "Jean-François Copé.", "Le dormeur doit se reveiller."], "Peut mourir même la mort."),

    new Question("Which GOT character played Hermoine Granger's mom in Harry Potter?", ["Melisandre", "Catelyn Stark", "Cersei Lannister", "Alerie Tyrell"], "Catelyn Stark"),

    new Question("Who said, You knelt as boys, now rise as men of the Nights Watch.?", ["Maester Aemon", "Eddard Stark", "Jeor Mormont", "Alliser Thorne"], "Jeor Mormont"),

    new Question("What is Daenerys Targaryens brothers name?", ["Varys", "Viserys", "Aerys", "Aegon"], "Viserys"),

    new Question("Who said, You knelt as boys, now rise as men of the Nights Watch.?", ["Maester Aemon", "Eddard Stark", "Jeor Mormont", "Alliser Thorne"], "Jeor Mormont")

    
];


var quiz = new Quiz(questions);

//Affiche Quiz
QuizUI.displayNext();  // PROJET COPIÉ/COLLÉ/PAS FINALISÉ
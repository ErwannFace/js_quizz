
window.onload = function () {

    var questionArea = document.getElementsByClassName('question')[0];
    var answerArea = document.getElementsByClassName('answers')[0];
    var current = 0;

questionsPack = {  // Toutes les questions + tableau contenant les rep possible ainsi que l'index correct answer

    'La réponse est ...' : ['49.3', 'A ma mort, je souhaite léguer mon corps à la science fiction.', 'Jean-François Copé', '42', 3],
    'gffhfhfghfhfgh' : ['a', 'j', 'h', 'u', 2]
};

function loadQuestion(curr) {   // Charge les questions dans la div question

    var question = Object.keys(questionsPack)[curr];
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;
    console.log('load');
    } 
    
    loadQuestion(current);
}

/*
function loadAnswers(curr) {
  
    var answers = questionsPack[Object.keys(questionsPack)[curr]];    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {

    var createDiv = document.createElement('div'),
    text = document.createTextNode(answers[i]);
      
    createDiv.appendChild(text);      
    createDiv.addEventListener("click", checkAnswer(i, answers));
    answerArea.appendChild(createDiv);
    }
    loadQuestion(current);
    loadAnswers(current);
  }      

 function checkAnswer(i, arr) {
    
    return function () {
    var givenAnswer = i,
    correctAnswer = arr[arr.length-1];
      
    if (givenAnswer === correctAnswer) {
        alert('correct!');

    } else {
        alert('FALSE!');                        
      }
      
    if (current < Object.keys(questionsPack).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);

      } else {
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
      }
                              
    }

    loadQuestion(current);
    loadAnswers(current);
  };
  */
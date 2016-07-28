window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
      allQuestions = {

        'La réponse est ...' : ['49.3', 'A ma mort, je souhaite léguer mon corps à la science fiction.', 'Jean-François Copé', '42', 3],
        
        'qcbkjcbjkqbkqbcqcbjkqsc' : ['A', 'B' , 'C', 1],

        'qcbkjcbjkqbkqbcqcbjkqsc' : ['A', 'B' , 'C', 1],

        'qcbkjcbjkqbkqbcqcbjkqsc' : ['A', 'B' , 'C', 1],

        'qcbkjcbjkqbkqbcqcbjkqsc' : ['A', 'B' , 'C', 1],

        'qcbkjcbjkqbkqbcqcbjkqsc' : ['A', 'B' , 'C', 1],

        'qcbkjcbjkqbkqbcqcbjkqsc' : ['A', 'B' , 'C', 1],

        'qcbkjcbjkqbkqbcqcbjkqsc' : ['A', 'B' , 'C', 1],

        'qcbkjcbjkqbkqbcqcbjkqsc' : ['A', 'B' , 'C', 1],
        
        'bgaqjcdqqjasdxbSSS' : ['1', '2', '3', 1]
      };
      
function loadQuestion(curr) {
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
function loadAnswers(curr) {
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      answerArea.appendChild(createDiv);
    }
  }
  
function checkAnswer(i, arr) {
    
    return function () {

      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);

      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        loadQuestion(current);
        loadAnswers(current);

      } else {
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
function addChecker(bool) {
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  
  
  loadQuestion(current);
  loadAnswers(current);
  
};
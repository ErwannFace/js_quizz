

/*var questions = [
        {
            "question"    :   "Question 1: c'est qui qui quoi?",
              
            "reponses"    :  ["rien","quoi quoi","Albert Einstein!","hum"],
            "bingo"       :   "Albert Einstein",
        },

        {
            "question"      :   "Question 2: c'est quand qui quoi?",
              
            "reponses"       :   ["beh..","tu disais","je ne sais pas","hum"],
            "correct"       :   "beh..",
        },
        ];

var activeQuestion = 0;*/
var question = "1: c'est qui qui quoi?";
var options = ["Rien","Quoi quoi","Albert Einstein!","Hum"];
var bingo = "Albert Einstein";


    $(".activeQuest").text(question);
    $(".reponseOne").text(options[0]);
    $(".reponseTwo").text(options[1]);
    $(".reponseThree").text(options[2]);
    $(".reponseFour").text(options[3]);

    $(".reponseOne,.reponseTwo,.reponseThree,.reponseFour").click(function(){
   //alert("hey");
   
   if(options.click() == bingo){
    alert('yeh');
   }
   else{alert('heyhey');}
 
      //https://www.youtube.com/watch?v=d_UuOVhuCF8  
  

    
});



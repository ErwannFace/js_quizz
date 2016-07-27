var question = [
                "1: Les chats doméstiques chassent chaque année aux USA :",
                "2: quelle est la principale cause de la défôrestation ?"
                ];
var options = [
                ["600 000 oiseaux?","1 milion d'oiseaux?","50 milions d'oiseaux?","1 millard 400 milions d'oiseaux?"],
                ["L'industrie","L'agriculture","Les incendies","L'elvage'"]
            ];
var bingo = [options[0][3],options[1][1]];

var score = 0;
var questionEnCours = 0;


function displayContent(){
 $(".activeQuest").text(question[questionEnCours]);
    $(".reponseOne").text(options[questionEnCours][0]);
    $(".reponseTwo").text(options[questionEnCours][1]);
    $(".reponseThree").text(options[questionEnCours][2]);
    $(".reponseFour").text(options[questionEnCours][3]);
    $(".monScore").text(score);

}

displayContent();


$(".reponseOne,.reponseTwo,.reponseThree,.reponseFour").click(function() {
    var choix= $(this).html();
    console.log("choix : "+choix);
    console.log("bingo : "+bingo[questionEnCours]);
    if (choix == bingo[questionEnCours]) {
        $(this).css('background-color','green');
        $(this).css('color','white');
        score++;
        $(".monScore").text(score);
        

    } else {
        $(this).css('background-color','red');
        $(this).css('color','white');
        $(".monScore").text(score);
    }
});

$("#suivt").click(function() {
    questionEnCours++;    
    displayContent();
    $(".reponseOne,.reponseTwo,.reponseThree,.reponseFour").css('background-color','rgb(213,213,213)');
    $(".reponseOne,.reponseTwo,.reponseThree,.reponseFour").css('color','rgb(51,51,51)');
});                 

$("#precdt").click(function() {
    questionEnCours--;    
    displayContent();
    $(".reponseOne,.reponseTwo,.reponseThree,.reponseFour").css('background-color','rgb(213,213,213)');
    $(".reponseOne,.reponseTwo,.reponseThree,.reponseFour").css('color','rgb(51,51,51)');   
});

//algo une seule question !!!!!
/*
var question = "1: c'est qui qui quoi?";
var options = ["Rien","Quoi quoi","Albert Einstein!","Hum"];
var bingo = options[2];

var questions =[];
questions.push([question, options, bingo]);



//question = "2 quel est le sens de la vie";
//options = ["Pouet","Il n'y a pas de réponse","42","Les cerises"];
//bingo = options[1];
//questions.push([question, options, bingo]);

var score = 0;
var questionEnCours = 0;

 $(".activeQuest").text(questions[questionEnCours][0]);
    $(".reponseOne").text(questions[questionEnCours][1][0]);
    $(".reponseTwo").text(options[1]);
    $(".reponseThree").text(options[2]);
    $(".reponseFour").text(options[3]);
    $(".monScore").text(score);



$(".reponseOne,.reponseTwo,.reponseThree,.reponseFour").click(function() {
    var choix= $(this).html();
    if (choix == bingo) {
        $(this).css('background-color','green');
        $(this).css('color','white');
        score++;
        $(".monScore").text(score);

    } else {
        $(this).css('background-color','red');
        $(this).css('color','white');
        $(".monScore").text(score);
    }
});

*/
  





//mes premiers tests !!!!!

//$(".reponseOne,.reponseTwo,.reponseThree,.reponseFour").click(function(){
//alert("hey");
   
/*
$(".reponseThree").click(function(){  
    $(".reponseThree").css('background-color','green');
    $(".reponseThree").css('color','white');
});

$(".reponseOne").click(function(){  
    $(".reponseOne").css('background-color','red');
    $(".reponseOne").css('color','white');
});

$(".reponseTwo").click(function(){  
    $(".reponseTwo").css('background-color','red');
    $(".reponseTwo").css('color','white');
});

$(".reponseFour").click(function(){  
    $(".reponseFour").css('background-color','red');
    $(".reponseFour").css('color','white');
});
*/



var question = "1: c'est qui qui quoi?";
var options = ["Rien","Quoi quoi","Albert Einstein!","Hum"];
var bingo = options[2];
var score = 0;


 $(".activeQuest").text(question);
    $(".reponseOne").text(options[0]);
    $(".reponseTwo").text(options[1]);
    $(".reponseThree").text(options[2]);
    $(".reponseFour").text(options[3]);
    $(".monScore").text(score);



$(".reponseOne,.reponseTwo,.reponseThree,.reponseFour").click( function () {
    var choix= $(this).html();
    if (choix == bingo) {
        $(this).css('background-color','green');
        $(this).css('color','white');
        $(".monScore").text(score++);
    } else {
        $(this).css('background-color','red');
        $(this).css('color','white');
        $(".monScore").text(score);
    }
});

   





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

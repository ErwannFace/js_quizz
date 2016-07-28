$(document).ready( function () {
 function question1() {
    $("#question1").show();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").hide();
    $("#question9").hide();
    $("#question10").hide();
}
   
   function question2() {
    $("#question1").hide();
    $("#question2").show();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").hide();
    $("#question9").hide();
    $("#question10").hide();
};


function question3() {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").show();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").hide();
    $("#question9").hide();
    $("#question10").hide();
};

function question4() {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").show();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").hide();
    $("#question9").hide();
    $("#question10").hide();
};



function question5() {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").show();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").hide();
    $("#question9").hide();
    $("#question10").hide();
};

function question6() {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").show();
    $("#question7").hide();
    $("#question8").hide();
    $("#question9").hide();
    $("#question10").hide();
};

function question7() {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").show();
    $("#question8").hide();
    $("#question9").hide();
    $("#question10").hide();
};

function question8() {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").show();
    $("#question9").hide();
    $("#question10").hide();
};

function question9() {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").hide();
    $("#question9").show();
    $("#question10").hide();
};


function question10() {
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#question6").hide();
    $("#question7").hide();
    $("#question8").hide();
    $("#question9").hide();
    $("#question10").show();
};


//Pour passer à la question correspondante à l'id sur le quel on clic 
$('#next1').click(question2);
$('#next2').click(question3);
$('#next3').click(question4);
$('#next4').click(question5);
$('#next5').click(question6);
$('#next6').click(question7);
$('#next7').click(question8);
$('#next8').click(question9);
$('#next9').click(question10);


//Pour retourner à la question precedente 
$('#pre1').click(question1);
$('#pre2').click(question2);
$('#pre3').click(question3);
$('#pre4').click(question4);
$('#pre5').click(question5);
$('#pre6').click(question6);
$('#pre7').click(question7);
$('#pre8').click(question8);
$('#pre9').click(question9);
$



//pour mettre la bonne reponse en vert
$(".bonne").click(function(){
        $(".mauvaise").each( function(k, obj){
            obj.style.backgroundColor='#F8F7F7';
        })
         $(this).css("background-color", 'green');
    });

//pour mettre la mauvaise reponse en rouge

$(".mauvaise").click(function(){
    $(".bonne").each( function(k, obj){
            obj.style.backgroundColor='#F8F7F7';
        });
    $(".mauvaise").each( function(k, obj){
            obj.style.backgroundColor='#F8F7F7';
        });
         $(this).css("background-color", 'red');
    });

});
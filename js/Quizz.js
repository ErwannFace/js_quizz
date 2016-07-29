$(document).ready( function () {
 function quest1() {
    $("#quest1").show();
    $("#quest2").hide();
    $("#quest3").hide();
    $("#quest4").hide();
    $("#quest5").hide();
    $("#quest6").hide();
    $("#quest7").hide();
    $("#quest8").hide();
    $("#quest9").hide();
    $("#quest10").hide();
}
   
   function quest2() {
    $("#quest1").hide();
    $("#quest2").show();
    $("#quest3").hide();
    $("#quest4").hide();
    $("#quest5").hide();
    $("#quest6").hide();
    $("#quest7").hide();
    $("#quest8").hide();
    $("#quest9").hide();
    $("#quest10").hide();
};


function quest3() {
    $("#quest1").hide();
    $("#quest2").hide();
    $("#quest3").show();
    $("#quest4").hide();
    $("#quest5").hide();
    $("#quest6").hide();
    $("#quest7").hide();
    $("#quest8").hide();
    $("#quest9").hide();
    $("#quest10").hide();
};

function quest4() {
    $("#quest1").hide();
    $("#quest2").hide();
    $("#quest3").hide();
    $("#quest4").show();
    $("#quest5").hide();
    $("#quest6").hide();
    $("#quest7").hide();
    $("#quest8").hide();
    $("#quest9").hide();
    $("#quest10").hide();
};



function quest5() {
    $("#quest1").hide();
    $("#quest2").hide();
    $("#quest3").hide();
    $("#quest4").hide();
    $("#quest5").show();
    $("#quest6").hide();
    $("#quest7").hide();
    $("#quest8").hide();
    $("#quest9").hide();
    $("#quest10").hide();
};

function quest6() {
    $("#quest1").hide();
    $("#quest2").hide();
    $("#quest3").hide();
    $("#quest4").hide();
    $("#quest5").hide();
    $("#quest6").show();
    $("#quest7").hide();
    $("#quest8").hide();
    $("#quest9").hide();
    $("#quest10").hide();
};

function quest7() {
    $("#quest1").hide();
    $("#quest2").hide();
    $("#quest3").hide();
    $("#quest4").hide();
    $("#quest5").hide();
    $("#quest6").hide();
    $("#quest7").show();
    $("#quest8").hide();
    $("#quest9").hide();
    $("#quest10").hide();
};

function quest8() {
    $("#quest1").hide();
    $("#quest2").hide();
    $("#quest3").hide();
    $("#quest4").hide();
    $("#quest5").hide();
    $("#quest6").hide();
    $("#quest7").hide();
    $("#quest8").show();
    $("#quest9").hide();
    $("#quest10").hide();
};

function quest9() {
    $("#quest1").hide();
    $("#quest2").hide();
    $("#quest3").hide();
    $("#quest4").hide();
    $("#quest5").hide();
    $("#quest6").hide();
    $("#quest7").hide();
    $("#quest8").hide();
    $("#quest9").show();
    $("#quest10").hide();
};


function quest10() {
    $("#quest1").hide();
    $("#quest2").hide();
    $("#quest3").hide();
    $("#quest4").hide();
    $("#quest5").hide();
    $("#quest6").hide();
    $("#quest7").hide();
    $("#quest8").hide();
    $("#quest9").hide();
    $("#quest10").show();
};


//Pour passer à la question suivante 
$('#nextOne').click(quest2);
$('#next2').click(quest3);
$('#next3').click(quest4);
$('#next4').click(quest5);
$('#next5').click(quest6);
$('#next6').click(quest7);
$('#next7').click(quest8);
$('#next8').click(quest9);
$('#next9').click(quest10);


//Pour retourner à la question precedente 
$('#prec1').click(quest1);
$('#prec2').click(quest2);
$('#prec3').click(quest3);
$('#prec4').click(quest4);
$('#prec5').click(quest5);
$('#prec6').click(quest6);
$('#prec7').click(quest7);
$('#prec8').click(quest8);
$('#prec9').click(quest9);




//pour mettre la bonne reponse en vert
$(".vrai").click(function(){
        $(".fausse").each( function(k, obj){
            obj.style.backgroundColor='#F8F7F7';
        })
         $(this).css("background-color", 'green');
    });

//pour mettre la mauvaise reponse en rouge

$(".fausse").click(function(){
    $(".vrai").each( function(k, obj){
            obj.style.backgroundColor='#F8F7F7';
        });
    $(".fausse").each( function(k, obj){
            obj.style.backgroundColor='#F8F7F7';
        });
         $(this).css("background-color", 'red');
    });

});
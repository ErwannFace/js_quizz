//JS 

$(document).ready(function() {
    $("#Question2, #Question3, #Question4, #Question5, #Question6, #Question7, #Question8, #Question9, #Question10").hide();

    //faire en sorte que mon bouton "next" affiche ma 2ème question mais aussi cache la 1ère
    $(".buttonext").on('click', function() {
        $("#Question2").fadeIn(1000) && $("#Question1").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question1").fadeIn() && $("#Question2").hide();
    })
    $(".buttonext1").on('click', function() {
        $("#Question3").fadeIn(1000) && $("#Question2").hide();
    })
    $(".buttonprev1").click( function() {
        $("#Question2").fadeIn() && $("#Question3").hide();
    })
    $(".buttonext2").on('click', function() {
        $("#Question4").fadeIn(1000) && $("#Question3").hide();
    })
    $(".buttonprev2").click( function() {
        $("#Question3").fadeIn() && $("#Question4").hide();
    })
    $(".buttonext3").on('click', function() {
        $("#Question5").fadeIn(1000) && $("#Question4").hide();
    })
    $(".buttonprev3").click( function() {
        $("#Question4").fadeIn() && $("#Question5").hide();
    })
    $(".buttonext4").on('click', function() {
        $("#Question6").fadeIn(1000) && $("#Question5").hide();
    })
    $(".buttonprev4").click( function() {
        $("#Question5").fadeIn() && $("#Question6").hide();
    })
    $(".buttonext5").on('click', function() {
        $("#Question7").fadeIn(1000) && $("#Question6").hide();
    })
    $(".buttonprev5").click( function() {
        $("#Question6").fadeIn() && $("#Question7").hide();
    })
    $(".buttonext6").on('click', function() {
        $("#Question8").fadeIn(1000) && $("#Question7").hide();
    })
    $(".buttonprev6").click( function() {
        $("#Question7").fadeIn() && $("#Question8").hide();
    })
    $(".buttonext7").on('click', function() {
        $("#Question9").fadeIn(1000) && $("#Question8").hide();
    })
    $(".buttonprev7").click( function() {
        $("#Question8").fadeIn() && $("#Question9").hide();
    })
    $(".buttonext8").on('click', function() {
        $("#Question10").fadeIn(1000) && $("#Question9").hide();
    })
    $(".buttonprev8").click( function() {
        $("#Question9").fadeIn() && $("#Question10").hide();
    })

    //background-color : red; = mauvais réponse & background-color : green; = bonne réponse
    $(".true").on("click", function() {
        $(this).css("background-color", "limegreen");
    })
    $(".false").click( function() {
        $(this).css("background-color", "red");
    })    

    //compter le score 
/*    $(".score").click( function() {
        var length = $('.true > *').length;
        alert(length);
    })*/
    
});
   


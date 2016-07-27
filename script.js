$(".all .question").each(function(i) {
    if (i != 0)
        $(this).hide();
});

$("#next").click(function(){
    if ($(".all .question:visible").next().length != 0)
        $(".all .question:visible").next().show("slide").prev().hide("slide");
    else {
        $(".all .question:visible").hide("slide");
        $(".all .question:first").show("slide");
    }
    return false;
});

$("#prev").click(function(){
    if ($(".all .question:visible").prev().length != 0)
        $(".all .question:visible").prev().show("slide").next().hide("slide");
    else {
        $(".all .question:visible").hide("slide");
        $(".all .question:last").show("slide");
    }
    return false;
});

$(".vrai").click(function(){
    $(this).css("background-color", "green");
});

$(".faux").click(function(){
    $(this).css("background-color", "red");
});
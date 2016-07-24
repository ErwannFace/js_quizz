$(".ans-good").on({
    /*mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, */
    click: function(){
        $("td").removeClass("danger");
        $(".ans-good").addClass("success");
    } 
});

$(".ans-bad").on({
    click: function(){
        $("td").removeClass("danger");
        $("td").removeClass("success");
        $(this).addClass("danger");
    }
})
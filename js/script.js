$(".ans-good").on({
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
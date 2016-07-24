$(document).ready(function(){
	var question = $(".question").hide();
    $("#next").click(function(){
        $(".question").show("slide");
    });
});
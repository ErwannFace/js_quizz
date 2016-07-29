$(".answer").click(validate);
$(".answerFalse").click(faux);
$("#slider-prev").click(previous);
$("#slider-next").click(next);

var count = 1;

function none () {

}

function validate (){
    $(this).addClass("green");
}

function faux () {
    $(this).addClass("faux");  
}

var slider = $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
});

function previous (){

    if (count > 1){;
    count -=1;
    slider.goToPrevSlide();
     }
    var x = document.getElementsByClassName("count");
    x[0].innerHTML = "Question : " + count + "/10";
}

function next (){
    
    if (count < 10){;
    count +=1;
    slider.goToNextSlide();
     }
    var x = document.getElementsByClassName("count");
    x[0].innerHTML = "Question : " + count + "/10";
}



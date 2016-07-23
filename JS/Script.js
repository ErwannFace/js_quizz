function surligne (champ, erreur) {
  if(erreur) {
    champ.style.backgroundColor = "#FF6347";/*faux*/
  }
  else {
    champ.style.backgroundColor = "#449D44";/*vrai*/
  }
}
 
function verifReponse (champ) {
  if(champ.value === "Ernesto che Guevara") {
    surligne(champ, false);
    return true;
  }
  else if (champ.value === "Hugo Chavez") {
   	surligne(champ, false);
    return true;
  }
  else if (champ.value === "Tupac Shakur") {
   	surligne(champ, false);
    return true;
  }
  else if (champ.value === "Amin Dada") {
   	surligne(champ, false);
    return true;
  }
  else if (champ.value === "Mouammar Khadafi") {
   	surligne(champ, false);
    return true;
  }
  else if (champ.value === "Oussama Ben Laden") {
   	surligne(champ, false);
    return true;
  }
  else if (champ.value === "Yasser Arafat") {
   	surligne(champ, false);
    return true;
  }
  else if (champ.value === "Vladimir Poutine") {
   	surligne(champ, false);
    return true;
  }
  else if (champ.value === "Malcom X") {
   	surligne(champ, false);
    return true;
  }
  else if (champ.value === "LM3ALLEM") {
   	surligne(champ, false);
    return true;
  }
  else {
    surligne(champ, true);
    alert("T'ES NULL!!");
    return false;

  }
}

$("#next").click(function(){
  $(".question2").show();
  $(".question1").hide();
});

$("#pre").click(function(){
  $(".question2").hide();
  $(".question1").show();
});

$("#next1").click(function(){
  $(".question3").show();
  $(".question2").hide();
});

$("#pre1").click(function(){
  $(".question3").hide();
  $(".question2").show();
});

$("#next2").click(function(){
  $(".question4").show();
  $(".question3").hide();
});

$("#pre2").click(function(){
  $(".question4").hide();
  $(".question3").show();
});

$("#next3").click(function(){
  $(".question5").show();
  $(".question4").hide();
});

$("#pre3").click(function(){
  $(".question5").hide();
  $(".question4").show();
});

$("#next4").click(function(){
  $(".question6").show();
  $(".question5").hide();
});

$("#pre4").click(function(){
  $(".question6").hide();
  $(".question5").show();
});

$("#next5").click(function(){
  $(".question7").show();
  $(".question6").hide();
});

$("#pre5").click(function(){
  $(".question7").hide();
  $(".question6").show();
});

$("#next6").click(function(){
  $(".question8").show();
  $(".question7").hide();
});

$("#pre6").click(function(){
  $(".question8").hide();
  $(".question7").show();
});

$("#next7").click(function(){
  $(".question9").show();
  $(".question8").hide();
});

$("#pre7").click(function(){
  $(".question9").hide();
  $(".question8").show();
});

$("#next8").click(function(){
  $(".question10").show();
  $(".question9").hide();
});

$("#pre8").click(function(){
  $(".question10").hide();
  $(".question9").show();
});
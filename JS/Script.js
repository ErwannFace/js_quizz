function surligne (champ, erreur) {
  if(erreur) {
    champ.style.backgroundColor = "#FF6347";/*faux*/
  }
  else {
    champ.style.backgroundColor = "#7CFC00";/*vrai*/
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
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
  else if (champ.value === "2pac") {
   	surligne(champ, false);
    return true;
  }
  else if (champ.value === "Amin Dada") {
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

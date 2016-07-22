function surligne (champ, erreur) {
  if(erreur) {
    champ.style.backgroundColor = "red";
  }
  else {
    champ.style.backgroundColor = "green";
  }
}
 
function verifReponse (champ) {
  if(champ.value === "Ernesto che Guevara") {
    surligne(champ, false);
    return true;
  }
  else if (champ.value === "Guevara") {
   	surligne(champ, false);
    return true;
  }
  else {
    surligne(champ, true);
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

var question=[];
var q1= "etes vous essez fort pour continuer ?";
var rep=[];
var rep1="oui";
var rep2="non";
var rep3="pietre";
var rep4="je ne sais pas";


var q = question.push([q1]);
AfficheRep();
AfficherQuest();

function AfficherQuest(){
$("#question").text(q1);

}


function AfficheRep(){
$("#rep1").text(rep1);
$("#rep2").text(rep2);
$("#rep3").text(rep3);
$("#rep4").text(rep4);
}

function ChangeColor(){
	
	
}
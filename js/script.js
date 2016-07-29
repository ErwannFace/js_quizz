/*variable 1*/
var question=[];
var q1= "etes vous essez fort pour continuer ?";
var rep=[];
var q1rep1="oui";
var q1rep2="non";
var q1rep3="pietre";
var q1rep4="je ne sais pas";


/*call display reponse1 and question1*/
AfficheRep1();
AfficherQuest1();

/*display question1*/
function AfficherQuest1(){
$("#question").text(q1);


}

/*display reponse1*/
function AfficheRep1(){
$("#rep1").text(q1rep1);
$("#rep2").text(q1rep2);
$("#rep3").text(q1rep3);
$("#rep4").text(q1rep4);
}
/*variable 2*/
var q2= "quel est mon années de naissances ?";
var rep=[];
var q2rep1="1987";
var q2rep2="1664";
var q2rep3="1897";
var q2rep4="je ne sais pas";

/*call display q2*/
function Question2(){
AfficheRep2();
AfficherQuest2();
}
/*display q2*/
function AfficherQuest2(){
$("#question").text(q2);


}

/*display rep2*/
function AfficheRep2(){
$("#rep1").text(q2rep1);
$("#rep2").text(q2rep2);
$("#rep3").text(q2rep3);
$("#rep4").text(q2rep4);
}
/*variable 3*/
var q3= "Avez Vous mal au cheveux apres 10h de code ,";
var rep=[];
var q3rep1="defois";
var q3rep2="non";
var q3rep3="jamais";
var q3rep4="oui";


/*call display3*/
function Question3(){
AfficheRep3();
AfficherQuest3();
}
/*display question3*/
function AfficherQuest3(){
$("#question").text(q2);


}

/*display rep3*/
function AfficheRep3(){
$("#rep1").text(q3rep1);
$("#rep2").text(q3rep2);
$("#rep3").text(q3rep3);
$("#rep4").text(q3rep4);
}

/*change the color*/

	$(".false").click(function(){
	$(this).css("background-color", 'red');

	});

	$(".true").click(function(){
	$(this).css("background-color", 'green');	

	});

		
/*button next*/
$("#next").click(function(){
	Question2();
	$(this).css("background-color", 'white')
	
});
/*button previous*/
$("#prev").click(function(){
	AfficheRep1()
	AfficherQuest1();
	

});
		


/*error: file write error (No space left on device)
fatal: unable to write sha1 file*/
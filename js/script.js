$(function() {
      // obturation des réponses
      $('.reponse').hide();
      }); 

//stylisation en jquery
var q = $('.question');          
q.css('background', 'white');  
q.css('border-style', 'solid'); 
q.css('border-width', '4px');
q.css('border-color', 'darkgray');    
q.css('width', '900px');         
q.css('height', '250px');        
q.css('margin', '20px');         


$('.texte').css('float', 'left');
$('.texte').css('width', '90%');
$('img').css('float', 'right');
$('img').css('margin-top', '80px');

$("h2").css("color", "darkgray");
$("p").css("font-size", "17px");
$("p").css("color", "gray");

//  Action link «check responses»
$('a').hover(
          function() { 
            $('.reponse').show();
            if ($(':radio[id="r3"]:checked').val()) {
              $('#img1').attr('src', 'right.png'); 
              $('#reponse1').css('color', 'green');
            }  
            else {
              $('#img1').attr('src', 'wrong.png');
              $('#reponse1').css('color', 'red');
            }
          }
        );       
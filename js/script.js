$(function() {
      // obturation de toues les réponses
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
$('a').mouseover(
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
            
            if ($(':radio[id="r6"]:checked').val() || $(':radio[id="r8"]:checked').val()) {

            $('#img2').attr('src', 'right.png');
            $('#reponse2').css('color', 'green');

            }

           else {

              $('#img2').attr('src', 'wrong.png');
              $('#reponse2').css('color', 'red');

            } 

            if ($(':checkbox[id="r9"]:checked').val() && $(':checkbox[id="r11"]:checked').val() 
              && $(':checkbox[id="r12"]:checked').val() && $('#r10').prop('checked', false)) {

            $('#img3').attr('src', 'right.png');
            $('#reponse3').css('color', 'green');

            }

           else {

              $('#img3').attr('src', 'wrong.png');
              $('#reponse3').css('color', 'red');
            }          
          
            if ($(':radio[id="r13"]:checked').val()) {
              $('#img4').attr('src', 'right.png'); 
              $('#reponse4').css('color', 'green');
            }  

            else {
              $('#img4').attr('src', 'wrong.png');
              $('#reponse4').css('color', 'red');
            } 

            if ($(':radio[id="r18"]:checked').val()) {
              $('#img5').attr('src', 'right.png'); 
              $('#reponse5').css('color', 'green');
            }  

            else {
              $('#img5').attr('src', 'wrong.png');
              $('#reponse5').css('color', 'red');
            } 


            if ($(':radio[id="r22"]:checked').val()) {
              $('#img6').attr('src', 'right.png'); 
              $('#reponse6').css('color', 'green');
            }  

            else {
              $('#img6').attr('src', 'wrong.png');
              $('#reponse6').css('color', 'red');
            } 


            if ($(':radio[id="r24"]:checked').val()) {
              $('#img7').attr('src', 'right.png'); 
              $('#reponse7').css('color', 'green');
            }  

            else {
              $('#img7').attr('src', 'wrong.png');
              $('#reponse7').css('color', 'red');
            } 

            if ($(':radio[id="r29"]:checked').val()) {
              $('#img8').attr('src', 'right.png'); 
              $('#reponse8').css('color', 'green');
            }  

            else {
              $('#img8').attr('src', 'wrong.png');
              $('#reponse8').css('color', 'red');
            } 

            if ($(':radio[id="r31"]:checked').val()) {
              $('#img9').attr('src', 'right.png'); 
              $('#reponse9').css('color', 'green');
            }  

            else {
              $('#img9').attr('src', 'wrong.png');
              $('#reponse9').css('color', 'red');
            } 


            if ($(':radio[id="r36"]:checked').val()) {
              $('#img10').attr('src', 'right.png'); 
              $('#reponse10').css('color', 'green');
            }  

            else {
              $('#img10').attr('src', 'wrong.png');
              $('#reponse10').css('color', 'red');
            }
          }
        );       



    var quiztitle = "Quiz de Hassan";

    var quiz = [
        {
            "question"      :   "Q1: Qui est cette homme?",
            "image"         :   "Images/albert.jpg",
            "choices"       :   [
                                    "Sir Isaac Newton",
                                    "Nicolaus Copernicus",
                                    "Albert Einstein",
                                    "Ralph Waldo Emmerson"
                                ],
            "correct"       :   "Albert Einstein",
        },
        {
            "question"      :   "Q2: Qui est sur le billet de deux dollar?",
            "image"         :   "Images/thomas.jpg",
            "choices"       :   [
                                    "Thomas Jefferson",
                                    "Dwight D. Eisenhower",
                                    "Benjamin Franklin",
                                    "Abraham Lincoln"
                                ],
            "correct"       :   "Thomas Jefferson",
        },
        {
            "question"      :   "Q3: Quel evenements a eu lieux le 12 Avril 1861?",
            "choices"       :   [
                                    "Decouverte de l'amerique",
                                    "Guerre civil americaine",
                                    "L'independance Americaine",
                                    "Premier voyages dans l'espace"
                                ],
            "correct"       :   "Guerre civil americaine",
        },
         {
            "question"      :   "Q4: Debut de la revolution Cubaine?",
            "image"         :   "Images/cuba.png",
            "choices"       :   [
                                    "26 juillet 1953",
                                    "30 juin 1952",
                                    "26 octobre 1955",
                                    "1 janvier 1959"
                                ],
            "correct"       :   "26 juillet 1953",
        },
        {
            "question"      :   "Q5: Quand est partie le premier voyage sur la lune ",
            "choices"       :   [
                                    "20 octobre 1969",
                                    "19 juillet 1969",
                                    "21 juillet 1969",
                                    "20 juillet 1969"
                                ],
            "correct"       :   "20 juillet 1969",
        },
        {
            "question"      :   "Q6: En quelle anne a ete decouvert l'amerique",
            "image"         :   "",
            "choices"       :   [
                                    "1492",
                                    "1592",
                                    "1692",
                                    "1792"
                                ],
            "correct"       :   "1492",
        },
        {
            "question"      :   "Q7: Quelle est la date de la revolution francaise",
            "image"         :   "Images/fr.jpg",
            "choices"       :   [
                                    "1889",
                                    "1789",
                                    "1689",
                                    "1898"
                                ],
            "correct"       :   "1789",
        },
        {
            "question"      :   "Q8: En quelle anne a debute la 2nd Guerre mondiale?",
            "choices"       :   [
                                    "1914",
                                    "1918",
                                    "1939",
                                    "1935"
                                ],
            "correct"       :   "1939",
        },
        {
            "question"      :   "Q9: Que c'est-il passer le 11 mai 1981?",
            "image"         :   "",
            "choices"       :   [
                                    "Mitterand presidant de la france",
                                    "Mort de bob marley",
                                    "Revolution Russe",
                                    "premier attentats aux etat-unis"
                                ],
            "correct"       :   "Mort de bob marley",
        },
        {
            "question"      :   "Q10: Qui est-un charlot dans la promotion?",
            "choices"       :   [
                                    "Ghaffar",
                                    "Ange",
                                    "Youness le charlot",
                                    "Tyjow"
                                ],
            "correct"       :   "Youness le charlot",
        },
    ];


    var question = 0, score = 0, submt=true, picked;

    jQuery(document).ready(function($){
        function htmlEncode(value){
          return $(document.createElement('div')).text(value).html();
        }
        function addChoices(choices){
            if(typeof choices !== "undefined" && $.type(choices) == "array"){
                $('#choice-block').empty();
                for(var i=0;i<choices.length; i++){
                    $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');                    
                }
            }
        }

        function nextQuestion(){
            submt = true;
            $('#explanation').empty();
            $('#question').text(quiz[question]['question']);
            $('#pager').text('Question ' + Number(question + 1) + ' of ' + quiz.length);
            if(quiz[question].hasOwnProperty('image') && quiz[question]['image'] != ""){
                if($('#question-image').length == 0){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[question]['image']).attr('alt', htmlEncode(quiz[question]['question'])).insertAfter('#question');
                } else {
                    $('#question-image').attr('src', quiz[question]['image']).attr('alt', htmlEncode(quiz[question]['question']));
                }
            } else {
                $('#question-image').remove();
            }
            addChoices(quiz[question]['choices']);
            setupButtons();
        }

        function processQuestion(choice){
            if(quiz[question]['choices'][choice] == quiz[question]['correct']){
                $('.choice').eq(choice).css({'background-color':'#50D943'});
                $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[question]['explanation']));
                score++;
            } else {
                $('.choice').eq(choice).css({'background-color':'#D92623'});
                $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[question]['explanation']));
            }
            question++;
            $('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function(){
                if(question == quiz.length){
                    endQuiz();
                } else {
                    $(this).text('Check Answer').css({'color':'#937E90'}).off('click');
                    nextQuestion();
                }
            })
        }

        function setupButtons(){
            $('.choice').on('mouseover', function(){
                $(this).css({'background-color':'#e1e1e1'});
            });
            $('.choice').on('mouseout', function(){
                $(this).css({'background-color':'#fff'});
            })
            $('.choice').on('click', function(){
                picked = $(this).attr('data-index');
                $('.choice').removeAttr('style').off('mouseout mouseover');
                $(this).css({'border-color':'#222','font-weight':700,'background-color':'#c1c1c1'});
                if(submt){
                    submt=false;
                    $('#submitbutton').css({'color':''}).on('click', function(){
                        $('.choice').off('click');
                        $(this).off('click');
                        processQuestion(picked);
                    });
                }
            })
        }

        function endQuiz(){
            $('#explanation').empty();
            $('#question').empty();
            $('#choice-block').empty();
            $('#submitbutton').remove();
            $('#question').text("Vous avez " + score + " sur " + quiz.length + " bonne reponses.");
            $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');
        }

        function init(){
            if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
                $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
            } else {
                $(document.createElement('h1')).text("Quiz").appendTo('#frame');
            }

            if(typeof quiz !== "undefined" && $.type(quiz) === "array"){

                $(document.createElement('p')).addClass('pager').attr('id','pager').text('Question 1 sur ' + quiz.length).appendTo('#frame');

                $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
 
                if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
                }
            
                $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
            
                addChoices(quiz[0]['choices']);
            
                $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('VERIFIER').css({'font-weight':700,'color':'#222','padding':'30px 0'}).appendTo('#frame');
            
                setupButtons();
            }
        }
        
        init();
    });
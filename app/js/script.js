
//
//TODO: [x] Fonction pour ajouter ma class.
//


function addclass(div){
    //Variable pour stocker mes Elements ClassName
    var h = document.getElementsByClassName("answer");
    //Je veux avoir toutes les elements de la même class, donc je parcours avec un tableau
    for(var i = 0; i < h.length; i++){
        console.log("Qu'est ce que cela donne: "+ h[i]);
        h[i].classList.remove("bg-primary");
        h[i].classList.remove("bg-danger");
        h[i].classList.remove("bg-success");
    }
    //Par défaut j'ajoute ma Methode  classList.add
        div.classList.add("bg-primary");
}

//
//TODO: [x]  Fonction qui va révéler la bonne/mauvaise réponse
//

function reveal(){
    var j = document.getElementsByClassName("bg-primary")[0];
    //for(var k = 0; k < j.length; k++){
        if(j.classList.contains("b")){
            j.classList.add("bg-danger");
        }
        else{
        j.classList.add("bg-success");
        next_question();
    }
    //}
}
//
//TODO: []  FONCTION QUI VA PERMETTRE L'ACCÈS À LA QUESTION SUIVANTE
//

function next_question(){
    var status_button = document.getElementsByClassName("btn")[0];
    if(status_button.classList.contains("disabled")){
        status_button.classList.remove("disabled");
    }
}
//
//FUTURE: [] STOCKER LES QUESTIONS DANS UN TABLEAU
//
var tab_questions = [
    "Au Moyen-Âge, comment appelait-on les villages fortifiés ?",
    "À quel réalisateur français doit-on le film 'Banzaï' ?",
    "Dans le langage familier, comment appelle-t-on la dent du petit enfant ?",
    "Dans quel pays se trouve le circuit automobile de Zandvoort ?",
    "Dans quelle ville sont situées les plus célèbres falaises de France ?",
    "Qui a inventé les transports en communs modernes ?",
    "Quel laboratoire a inventé sans le vouloir le viagra ?",
    "Les vins rouges peuvent se classer en 3 catégories en fonction de leur consistance : quelles sont-elles ?",
    "En France, dans quelle ville se trouve l'adresse du père Noël ?",
    "Comment s'appelle le petit du zèbre ?"
];
//
//FUTURE: [] STOCKER LES REPONSES POUR CHAQUE QUESTION DANS UN TABEAU AVEC LEUR VALEUR
//
var tab_answers = [];

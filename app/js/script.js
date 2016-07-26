
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
//TODO: []  Fonction qui va révéler la bonne/mauvaise réponse
//

function reveal(){
    var j = document.getElementsByClassName("bg-primary")[0];
    //for(var k = 0; k < j.length; k++){
        if(j.classList.contains("b")){
            j.classList.add("bg-danger");
        }
        else{
        j.classList.add("bg-success");
    }
    //}
}
//
//TODO: []  FONCTION QUI VA PERMETTRE L'ACCÈS À LA QUESTION SUIVANTE
//
//
//FUTURE: [] STOCKER LES QUESTIONS DANS UN TABLEAU
//
var tab_questions = [];
//
//FUTURE: [] STOCKER LES REPONSES POUR CHAQUE QUESTION DANS UN TABEAU AVEC LEUR VALEUR
//
var tab_answers = [];

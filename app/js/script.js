
//TODO: [x] Fonction pour ajouter ma class.

function addclass(div){
    //Variable pour stocker mes Elements ClassName
    var h = document.getElementsByClassName("answer");
    //Je veux avoir toutes les elements de la même class, donc je parcours avec un tableau
    for(var i = 0; i < h.length; i++){
        console.log("Qu'est ce que cela donne: "+ h[i]);
        h[i].classList.remove("bg-primary");
    }
    //Par défaut j'ajoute ma Methode  classList.add
        div.classList.add("bg-primary");
}

//TODO: []  Fonction qui va révéler la bonne/mauvaise réponse

function reveal(){


}
//TODO: []  FONCTION QUI VA PERMETTRE L'ACCÈS À LA QUESTION SUIVANTE
//FUTURE: [] STOCKER LES QUESTIONS DANS UN TABLEAU
//FUTURE: [] STOCKER LES REPONSES POUR CHAQUE QUESTION DANS UN TABEAU AVEC LEUR VALEUR

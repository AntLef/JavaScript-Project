function psedo() {

    var start = 'Bonjour ', name, end = ' !', result;

    name = prompt('Quel est votre prénom ?');
    result = start + name + end;
    alert(result);

}

// ...

function displayJour(j) {
    console.log("Jour "+j+" = "+tab[j]);	
}

// ...



// création de la classe affichage des différents messages
var Afficheur = function(element) {
    var display = element; // cette variable est chargée de prendre l'élement passer au niveau du constructeur
  
    function setText(message) { // chargée de modifier le contenu de l'element passé dans le constructeur par un message qui lui sera passé
        display.innerHTML = message; // methode qui change le texte htlm de l'élement par le message
    }
    return {sendMessage : setText};
}
 
var scortO = 0;
var scortU = 0;
var cpt = 0;
  
function comparer(choixOrdi, choixUtilisateur) {
  
    if(choixUtilisateur == choixOrdi) {
        afficheur.sendMessage("Il y a égalité.</br>L'ordinateur a choisi " + choixOrdi);
    }
    else if( (choixUtilisateur == "pierre" && choixOrdi == "ciseaux") || (choixUtilisateur == "feuille" && choixOrdi == "pierre") ||  (choixUtilisateur == "ciseaux" && choixOrdi == "feuille") ) {
        afficheur.sendMessage("Vous avez gagné.</br>L'ordinateur a choisi " + choixOrdi);
        scortU++;
    }
    else if( (choixUtilisateur == "feuille" && choixOrdi == "ciseaux") || 
             (choixUtilisateur == "piere" && choixOrdi == "feuille") || 
             (choixUtilisateur == "ciseaux" && choixOrdi == "pierre") ) {
        afficheur.sendMessage("Vous avez perdu.</br>L'ordinateur a choisi " + choixOrdi);
        scortO++;
    }
  
}

var afficheur = new Afficheur(document.querySelector("#statut-jeu")); // création de l'objet qui va modifier le texte du résultat du jeu
s
function FchoixOrdi() {
    var choixOrdi = Math.floor(Math.random() * 51);
  
    if (choixOrdi < 20) {
        choixOrdi = "pierre";
        console.log("Pierre");
    }
    else if(choixOrdi > 20 && choixOrdi < 40) {
        choixOrdi = "feuille";
        console.log("Feuille");
    }
    else if(choixOrdi > 40) {
        choixOrdi = "ciseaux";
        console.log("Ciseaux");
    }
    return choixOrdi;
}

function FchoixUtilisateur(choixUtilisateur) {

    // if(Jeu <= chrono){                si choix utilisateur <= chrono / si choixutilisateur >= chrono , return perdu
    if(choixUtilisateur == "pierre") {
        choixUtilisateur = "pierre";
        console.log("Pierre")
    }
    else if(choixUtilisateur == "feuille") {
        choixUtilisateur = "feuille";
        console.log("Feuille");
    }
    else if(choixUtilisateur == "ciseaux") {
        choixUtilisateur = "ciseaux";
        console.log("Ciseaux");
    }
    return choixUtilisateur;
}

// test --- test --- test
// test --- test --- test

//function Fchrono(){
//intervalId = setInterval(FchoixUtilisateur, 3000);
//}  

// if(FchoixUtilisateur >= 3 secondes)

// test --- test --- test
// test --- test --- test

function main() {
  
    // déclaration de notre tableau pions qui va contenir l'ensemble des boutons
    var tabchoixUtilisateur = document.querySelectorAll("#block-jeu button"); 
    // la méthode va selectionner tous les boutons présent dans la div block-jeu et les retourner dans notre tableau pions
 
    var finJeu = 0;
    
        for(var i = 0, taille = tabchoixUtilisateur.length; i < taille; i++) {
  
        afficheur.sendMessage("Le jeu peut commencer. choisissez un objet"); // modification du message + choix du joueur
  
            tabchoixUtilisateur[i].addEventListener("click", function(){
  
                choixUtilisateur = this.id;
  
                var choixU = FchoixUtilisateur(choixUtilisateur);
                var choixO = FchoixOrdi();
                comparer(choixO, choixU);
 
                finJeu++;
                console.log(finJeu);
 
                    if(finJeu === 42){
                        if(choixUtilisateur == "pierre"){
                            choixUtilisateur = "pierre";
                            console.log("J1 à jouer Pierre");
                            choixOrdi = "feuille";
                            console.log("L'ordi a jouer Feuille, l'ordi est meilleur");
                        }
                        else if (choixUtilisateur == "feuille"){
                            choixUtilisateur = "feuille";
                            console.log("J1 a jouer Feuille")
                            choixOrdi = "ciseaux";
                            console.log("L'ordi a jouer Ciseaux, l'ordi est meilleur");
                        }
                        else if (choixUtilisateur == "ciseaux"){
                            choixUtilisateur = "ciseaux";
                            console.log("J1 a jouer Ciseaux")
                            choixOrdi = "pierre";
                            console.log("L'ordi a jouer Pierre, l'ordi est meilleur");
                        }
                        
                    }
            });
        }
}
  
main();
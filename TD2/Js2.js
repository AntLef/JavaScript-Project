    function psedo() {

    var start = 'Bonjour ', name, end = ' !', result;

    name = prompt('Quel est votre prénom ?');
    result = start + name + end;
    alert(result);

}




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

  
function comparer(_choixOrdi, choixUtilisateur) {
  
    if(choixUtilisateur == _choixOrdi) {
        afficheur.sendMessage("Il y a égalité.</br>L'ordinateur a choisi " + _choixOrdi);
    //console.log(scortU);
    //console.log(scortO);
    }
    else if( (choixUtilisateur == "pierre" && _choixOrdi == "ciseaux") || 
             (choixUtilisateur == "feuille" && _choixOrdi == "pierre") || 
             (choixUtilisateur == "ciseaux" && _choixOrdi == "feuille") ) {
        afficheur.sendMessage("Vous avez gagné.</br>L'ordinateur a choisi " + _choixOrdi);
        scortU++;
    //console.log(scortU);
    //console.log(scortO);
    }
    else if( (choixUtilisateur == "feuille" && _choixOrdi == "ciseaux") || 
             (choixUtilisateur == "piere" && _choixOrdi == "feuille") || 
             (choixUtilisateur == "ciseaux" && _choixOrdi == "pierre") ) {
        afficheur.sendMessage("Vous avez perdu.</br>L'ordinateur a choisi " + _choixOrdi);
        scortO++;
    //console.log(scortU);
    //console.log(scortO);
    }
  
}
  
var afficheur = new Afficheur(document.querySelector("#statut-jeu")); // création de l'objet qui va modifier le texte du résultat du jeu
  
function FchoixOrdi() {
    var choixOrdi = Math.floor(Math.random() * 51);
    var cpt = 0;
//mettre une condition avec une double instructions afin de choisir soit ciseaux ou feuilles et reset le cpt
        if (choixOrdi < 20){
            choixOrdi = "pierre";
            console.log("Pierre");
            cpt++;
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
  
function main() {
  
    // déclaration de notre tableau pions qui va contenir l'ensemble des boutons
    var tabchoixUtilisateur = document.querySelectorAll("#block-jeu button"); 
    // la méthode va selectionner tous les boutons présent dans la div block-jeu et les retourner dans notre tableau pions
 
    var finJeu = 30;
    
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
/**
 * Chrono
 */

var temps;
 
/**
 * Affiche le chrono
 */
 
var secondes = 3;
 
function Timer() {
    /* Chronomètre démarre à 3 secondes */
    if (secondes > 0) {
        document.getElementById("chrono").innerHTML = "Temps restant : " + secondes + "<br />";
        secondes--;
    } else {
        document.getElementById("chrono").innerHTML += "Ça y est !!!'as perdu " + "<br />";
        stopChrono();
    }
}
 
/**
 * Arrête le chrono
 */
function stopChrono() {
    clearInterval(temps);
}

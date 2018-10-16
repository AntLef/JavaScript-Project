// Psedo
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
  
function comparer(choixOrdi, choixUtilisateur) {
  
    if(choixUtilisateur == choixOrdi) {
        afficheur.sendMessage("Il y a égalité.</br>L'ordinateur a choisi " + choixOrdi);
    }
    else if( (choixUtilisateur == "pierre" && choixOrdi == "ciseaux") || 
             (choixUtilisateur == "feuille" && choixOrdi == "pierre") || 
             (choixUtilisateur == "ciseaux" && choixOrdi == "feuille") ) {
        afficheur.sendMessage("Vous avez gagné.</br>L'ordinateur a choisi " + choixOrdi);
        scortU++;
    }
    else if( (choixUtilisateur == "feuille" && choixOrdi == "ciseaux") || 
             (choixUtilisateur == "piere" && choixOrdi == "feuille") || 
             (choixUtilisateur == "ciseaux" && choixOrdi == "pierre") ) {
        afficheur.sendMessage("Vous avez perdu.</br>L'ordinateur a choisi " + choixOrdi);
        scortO++;
    }
    else if
  
}

function FchoixUtilisateur(choixUtilisateur) {
  
    if(choixUtilisateur == "pierre") {
        choixUtilisateur = "pierre";
    }
    else if(choixUtilisateur == "feuille") {
    choixUtilisateur = "feuille";
    }
    else if(choixUtilisateur == "ciseaux") {
        choixUtilisateur = "ciseaux";
    }
    return choixUtilisateur;
}

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
 
                    if(finJeu >= 42){
                        afficheur.sendMessage("Le jeu est fini</br>Ordi : " + scortO + "</br>Joueur : " + scortU);
                        return;
                    }
            });
        }
}
  
main();















/**
 * Chrono
 */

var temps; 
var secondes = 3;
 
function Timer() {
    /* Chronomètre démarre à 3 secondes */
    if (secondes > 0) {
        document.getElementById("chrono").innerHTML = "Temps restant : " + secondes + "<br />";
        secondes--;
    } else {
        document.getElementById("chrono").innerHTML += "Trop tard !!! T'as perdu " + "<br />";
        stopChrono();
    }
}
 
/**
 * Arrête le chrono
 */
function stopChrono() {
    clearInterval(temps);
}
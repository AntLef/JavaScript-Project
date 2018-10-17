// JS3///

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

function start(){ 
    alert("appuie sur ok pour commencer a jouer");
    chrono();
}

 
function comparer(_choixOrdi, choixUtilisateur) {
  
    if(choixUtilisateur == _choixOrdi) {
        afficheur.sendMessage("Il y a égalité.</br>L'ordinateur a choisi " + _choixOrdi);
        alert("Il y a égalité");
    console.log('Score de J1 est de',scortU);
    console.log('Score de IA est de',scortO);
    }
    else if( (choixUtilisateur == "pierre" && _choixOrdi == "ciseaux") || 
             (choixUtilisateur == "feuille" && _choixOrdi == "pierre") || 
             (choixUtilisateur == "ciseaux" && _choixOrdi == "feuille") ) {
        afficheur.sendMessage("Vous avez gagné.</br>L'ordinateur a choisi " + _choixOrdi);
        scortU++;
        alert("Tu as gagné");
    console.log('Score de J1 est de',scortU);
    console.log('Score de IA est de',scortO);
    }
    else if( (choixUtilisateur == "feuille" && _choixOrdi == "ciseaux") || 
             (choixUtilisateur == "pierre" && _choixOrdi == "feuille") || 
             (choixUtilisateur == "ciseaux" && _choixOrdi == "pierre") ) {
        afficheur.sendMessage("Vous avez perdu.</br>L'ordinateur a choisi " + _choixOrdi);
        scortO++;
        alert("Tu as perdu");
    console.log('Score de J1 est de',scortU);
    console.log('Score de IA est de',scortO);
    }   
}
  
var afficheur = new Afficheur(document.querySelector("#statut-jeu")); // création de l'objet qui va modifier le texte du résultat du jeu
var cptPierre = 0;
var cptFeuille = 0;
var cptCiseaux = 0;

function FchoixOrdi() {
    var choixOrdi = Math.floor(Math.random() * 100);


    /*if (choixOrdi < 20) {
    
    }
    else if(choixOrdi >= 20 && choixOrdi < 40) {}
    else if(choixOrdi >= 40) {}*/

        console.log('cptPierre : ' +cptPierre + '\n' +
            'cptFeuille : ' +cptFeuille + '\n' +
            'cptCiseaux : ' +cptCiseaux + '\n' +
            'choixOrdi : ' +choixOrdi + '\n'
            );

    if (cptPierre >= 2){
        if (choixOrdi < 50){
            choixOrdi = "feuille";
            //console.log('ctpPierre > 2', "Feuille");
            cptPierre = 0;
        }
        else if(choixOrdi > 50){
            choixOrdi = "ciseaux";
            //console.log('ctpPierre > 2', "Ciseaux");
            cptPierre = 0;
        }
        //else {console.log("else 1", choixOrdi);}
    }
    else if (cptPierre < 2 && choixOrdi <33){
        choixOrdi = "pierre";
        //console.log('ctpPierre > 2', "Pierre");
        cptPierre++;
        cptCiseaux = 0;
        cptFeuille = 0;
    }
        //else {console.log("else 2", choixOrdi);}

    if (cptFeuille >= 2){
        if(choixOrdi < 50) {
            choixOrdi = "pierre";
            //console.log('cptFeuille > 2', "Pierre");
            cptFeuille = 0;
        }
        else if(choixOrdi > 50) {
            choixOrdi = "ciseaux";
            //console.log('cptFeuille > 2', "Ciseaux");
            cptFeuille = 0;
        }
        //else {console.log("else 3", choixOrdi);}
    }
    else if (cptFeuille < 2 && (choixOrdi > 33 && choixOrdi < 66)){
        choixOrdi = "feuille";
        //console.log('cptFeuille > 2', "Feuille");
        cptFeuille++;
        cptCiseaux = 0;
        cptPierre = 0;
    }
        //else {console.log("else 4", choixOrdi);}

    if (cptCiseaux >= 2){
        if(choixOrdi < 50) {
            choixOrdi = "pierre";
            //console.log('cptCiseaux > 2', "Pierre");
            cptCiseaux = 0;
        }
        else if(choixOrdi > 50) {
            choixOrdi = "feuille";
            //console.log('cptCiseaux > 2', "Feuille");
            cptCiseaux = 0;
        }
        else {console.log("else 5", choixOrdi);}
    }
    else if (cptFeuille < 2 && choixOrdi > 66){
        choixOrdi = "ciseaux";
        //console.log('cptCiseaux > 2', "Ciseaux");
        cptCiseaux++;
        cptPierre = 0;
        cptFeuille =0;
    }
        //else {console.log("else 6", choixOrdi);}
        return choixOrdi;        
    }

function FchoixUtilisateur(choixUtilisateur){

    if(choixUtilisateur == "pierre") {
        choixUtilisateur = "pierre";
        console.log("J1 Pierre")
    }
    else if(choixUtilisateur == "feuille") {
        choixUtilisateur = "feuille";
        console.log("J1 Feuille");
    }
    else if(choixUtilisateur == "ciseaux") {
        choixUtilisateur = "ciseaux";
        console.log("J1 Ciseaux");
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
                start();
 
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
var timer;
function chrono(){
    if (timer) {
        clearTimeout(timer);
    }
timer = setTimeout(function() {
    scortO++;
    console.log("Tu n'as pas été assez rapide, tu as perdu.");
    console.log('Score de J1 est de',scortU);
    console.log('Score de IA est de',scortO);
    clearTimeout(timer);
    start();
}, 3000);
}

main();
start();




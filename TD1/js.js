var cpt = 0; // nb de manches jouees
var best_score = 0; // meilleur score
var score; // score de la partie en cours
var continuer;

function nb_aleatoire(min, max)
{
		 var nb = min + (max-min+1)*Math.random();
		 return Math.floor(nb);
}
		

function PoM_manche(min, max)
{
		 var nb = nb_aleatoire(min, max); // nb a deviner
		 var cpt = 0; // nb de coups pour le trouver
		 var saisie; // nb tape par le joueur
		 var msg = 'Le nombre a deviner est compris entre ' + min + ' et ' + max + '.';

		 do
		 {
					saisie = prompt(msg);

					// si "Annuler"
					if(saisie == null)
							 return 0;

					cpt++;
					if(saisie > nb)
							 msg = "C'est moins";
					else
							 msg = "C'est plus";
		 }
		 while(saisie != nb);

		 return cpt;
}

	 
function PoM_partie(min, max)
{
		 do
		 {
					score = PoM_manche(min, max); // joue la manche
					if(score)
					{
							 cpt++;
							 if(console.log(tableau) < best_score || best_score == 0){
										best_score = score;
										var tableau = [cpt, best_score, score];
										console.log(tableau);
											
										}
							


							 continuer = confirm("Bravo, tu as gagne en " + score + " coups.\nVeux-tu rejouer ?");
							 ajouterLigne();

					}
					else
							 continuer = false;
		 }
		 while(continuer);
		 alert("Tu as joue " + cpt + " manche(s).\nTon meilleur score est de " + best_score + " coups.");



}

function ajouterLigne()
	{
		var tabl = document.getElementById("tabl");

			var ligne = tabl.insertRow(-1); //on a ajouté une ligne

				var colonne1 = ligne.insertCell(0); //on a une ajouté une cellule
				colonne1.innerHTML += document.getElementById("cpt").innerHTML=cpt; //on y met le contenu de titre
				
				var colonne2 = ligne.insertCell(1); //on ajoute la seconde cellule
				colonne2.innerHTML += document.getElementById("best_score").innerHTML=best_score;
				
				var colonne3 = ligne.insertCell(2); //on ajoute la seconde cellule
				colonne3.innerHTML += document.getElementById("score").innerHTML=score;
				
	}
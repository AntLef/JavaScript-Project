console.log(tableau);


function ajouterLigne()
{
	var tableau = document.getElementById("tableau");

	var ligne = tableau.insertRow(-1);//on a ajouté une ligne

	var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
	colonne1.innerHTML += document.getElementById("cpt").value;//on y met le contenu de titre

	var colonne2 = ligne.insertCell(1);//on ajoute la seconde cellule
    colonne2.innerHTML += document.getElementById("score").value;
    
    var colonne3 = ligne.insertCell(1);//on ajoute la seconde cellule
	colonne3.innerHTML += document.getElementById("best_score").value;

}
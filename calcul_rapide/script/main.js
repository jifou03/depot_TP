/**
 * Created by Nickerson on 12/8/2015.
 */

"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // ATTACHER le gestionnaire validate au submit du formulaire
    document.formulaire_inscription.addEventListener('submit', valider_formulaire);
});


function valider_formulaire(event) {
    var resultat = false;
    var message = '';

    var prenom_Exp = new RegExp("^[A-Za-z0-9]{3,}$", "g");
    var prenom_ok = prenom_Exp.test(document.formulaire_inscription.prenom.value.trim());

    var nom_Exp = new RegExp("^[A-Za-z0-9]{3,}$", "g");
    var nom_ok = nom_Exp.test(document.formulaire_inscription.nom.value.trim());

    resultat = prenom_ok && nom_ok;

    if (!resultat) {
        event.preventDefault();
        message = 'Le formulaire n\'est pas valide !';
        document.getElementById("validation").innerHTML = message;
    }
    return resultat;
}





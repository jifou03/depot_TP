/**
 * Created by jnickers on 2015-12-02.
 */

"use strict";

var operateur = ["+", "-", "*"];
var wrong_answer = 0;
var good_answer = 0;
var level = [0, 1, 2];
var niveau = [debutant, intermediaire, avance];
var reponse_utilisateur = 0;
var result = 0;
var temps = false;
var debutant;
var intermediaire;
var avance;
var is_wrong_answer = false;


// chargement du DOM
document.addEventListener("DOMContentLoaded", function demarrer () {
    debutant = document.getElementById('debutant');
    debutant.addEventListener('click', go);
    intermediaire = document.getElementById('intermediaire');
    intermediaire.addEventListener('click', go);
    avance = document.getElementById('avance');
    avance.addEventListener('click', go);

    document.getElementById('reponse').style.visibility = "hidden";
    document.getElementById('en_accord').style.visibility = "hidden";
    document.getElementById('en_desaccord').style.visibility = "hidden";
    document.getElementById('debutant').style.visibility = "visible";
    document.getElementById('intermediaire').style.visibility = "visible";
    document.getElementById('avance').style.visibility = "visible";
    document.getElementById('parag_instruction').innerHTML = "Veuillez choisir le niveau et soyez prêt à calculer!! ";
});


// fonction que lorsque l'utilisateur décide de rejouer
    document.getElementById('en_accord').addEventListener('click', function (){
            wrong_answer = 0;
            good_answer = 0;
            reponse_utilisateur = 0;
            result = 0;
            temps = false;

            document.getElementById('reponse').style.visibility = "hidden";
            document.getElementById('en_accord').style.visibility = "hidden";
            document.getElementById('en_desaccord').style.visibility = "hidden";
            document.getElementById('debutant').style.visibility = "visible";
            document.getElementById('intermediaire').style.visibility = "visible";
            document.getElementById('avance').style.visibility = "visible";
            document.getElementById('question').innerHTML = "";
            document.getElementById('op_arithmetique').innerHTML = "";
            document.getElementById('parag_instruction').innerHTML = "";
            document.getElementById('status').innerHTML = "";
            document.getElementById('note_finale').innerHTML = "";
            document.getElementById('parag_instruction').innerHTML = "Veuillez choisir le niveau et soyez prêt à calculer!! ";
    });

// fonction qui exécute le décompte ainsi que le choix de l'utilisateur
    function go() {

        temps = countDown(12, "status");

        document.getElementById("reponse").addEventListener('keypress', enter);

        document.getElementById('debutant').style.visibility = "hidden";
        document.getElementById('intermediaire').style.visibility = "hidden";
        document.getElementById('avance').style.visibility = "hidden";

        switch (this.id) {
            case "debutant":
                level = 0;
                debutant_fonction();
                break;
            case "intermediaire":
                level = 1;
                intermediaire_fonction();
                break;
            case "avance":
                level = 2;
                avance_fonction();
                break;
            default:
                alert('Ca va pas');
        }

}

// fonction débutant qui fait les opérations aléatoirement
function debutant_fonction() {

    document.getElementById('parag_instruction').innerHTML = "";

    var op1 = operateur[Math.round(Math.random(operateur) * 1)];
    var nb1 = parseInt((Math.round(10 + Math.random() * 10)));
    var nb2 = parseInt((Math.round(10 + Math.random() * 10)));
    var op_arithmetique = (nb1 + op1 + nb2);
    document.getElementById("op_arithmetique").innerHTML = (op_arithmetique);
    document.getElementById('reponse').style.visibility = "visible";

    result = eval(nb1 + op1 + nb2);

}

// fonction intermédiaire qui fait les opérations aléatoirement
function intermediaire_fonction() {

    document.getElementById('parag_instruction').innerHTML = "";

    var op1 = operateur[Math.round(Math.random(operateur) * 2)];
    var op2 = operateur[Math.round(Math.random(operateur) * 2)];
    var nb1 = parseInt((Math.round(10 + Math.random() * 10)));
    var nb2 = parseInt((Math.round(10 + Math.random() * 10)));
    var nb3 = parseInt((Math.round(10 + Math.random() * 10)));
    var op_arithmetique = (nb1 + op1 + nb2 + op2 + nb3);
    document.getElementById("op_arithmetique").innerHTML = (op_arithmetique);
    document.getElementById('reponse').style.visibility = "visible";

    result = eval(nb1 + op1 + nb2 + op2 + nb3);
}

// fonction avancé qui fait les opérations aléatoirement
function avance_fonction() {

    document.getElementById('parag_instruction').innerHTML = "";

    var op1 = operateur[Math.round(Math.random(operateur) * 2)];
    var op2 = operateur[Math.round(Math.random(operateur) * 2)];
    var op3 = operateur[Math.round(Math.random(operateur) * 2)];
    var nb1 = parseInt((Math.round(10 + Math.random() * 10)));
    var nb2 = parseInt((Math.round(10 + Math.random() * 10)));
    var nb3 = parseInt((Math.round(10 + Math.random() * 10)));
    var nb4 = parseInt((Math.round(10 + Math.random() * 10)));
    var op_arithmetique = ("(" + " " + nb1 + op1 + nb2 + " " + ")" + " " + op2 + " " + "(" + " " + nb3 + op3 + nb4 + " " + ")");
    document.getElementById("op_arithmetique").innerHTML = (" " + op_arithmetique);
    document.getElementById('reponse').style.visibility = "visible";

    result = eval((nb1 + op1 + nb2) + op2 + (nb3 + op3 + nb4));

}

// fonction qui vérifie la réponse lorsque l'utilisateur pèse sur le bouton entré
function enter () {
    reponse_utilisateur = parseInt(document.getElementById("reponse").value);
    if (window.event.keyCode == "13") {
        console.log(wrong_answer);
        if ((result != reponse_utilisateur) && (level == 0)) {
            document.getElementById('output').innerHTML = "Mauvaise réponse!";
            document.getElementById('reponse').value = "";
            document.getElementById('output').style.visibility = "visible";
            wrong_answer++;
            debutant_fonction();
        } else if ((result == reponse_utilisateur) && (level == 0)) {
            console.log(good_answer);
            document.getElementById('output').innerHTML = '<span style="color:green"> Bonne réponse ! </span>';
            document.getElementById('reponse').value = "";
            document.getElementById('output').style.visibility = "visible";
            good_answer++;
            debutant_fonction();
        } else if (result != reponse_utilisateur && level == 1) {
            document.getElementById('output').innerHTML = "Mauvaise réponse!";
            document.getElementById('reponse').value = "";
            document.getElementById('output').style.visibility = "visible";
            wrong_answer++;
            intermediaire_fonction();
        } else if (result == reponse_utilisateur && level == 1) {
            document.getElementById('output').innerHTML = '<span style="color:green"> Bonne réponse ! </span>';
            document.getElementById('reponse').value = "";
            document.getElementById('output').style.visibility = "visible";
            good_answer++;
            intermediaire_fonction();
        } else if (result != reponse_utilisateur && level == 2) {
            document.getElementById('output').innerHTML = "Mauvaise réponse!";
            document.getElementById('reponse').value = "";
            document.getElementById('output').style.visibility = "visible";
            wrong_answer++;
            avance_fonction();
        } else if (result == reponse_utilisateur && level == 2) {
            document.getElementById('output').innerHTML = '<span style="color:green"> Bonne réponse ! </span>';
            document.getElementById('reponse').value = "";
            document.getElementById('output').style.visibility = "visible";
            good_answer++;
            avance_fonction();
        }
    }
}


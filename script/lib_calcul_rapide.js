/**
 * Created by jnickers on 2015-12-02.
 */
"use strict";

function countDown (secs, elem) {
    var element = document.getElementById(elem);
    if (secs < 1) {
        clearTimeout(timer);
        element.innerHTML = 'Il vous reste' + " " + 0 + " " + 'secondes';
        terminer();
        temps = true;
    } else {
        element.innerHTML = 'Il vous reste' + " " + secs + " " + 'secondes';
        secs--;
        var timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000);
    }
    return temps;
}

function terminer () {
    document.getElementById("op_arithmetique").innerHTML = "Le temps est écoulé. Le test est terminé.";
    document.getElementById('reponse').style.visibility = "hidden";
    document.getElementById('output').style.visibility = "hidden";
    if (wrong_answer > 1 && good_answer > 1) {
        document.getElementById('note_finale').innerHTML = "Vous avez eu " + wrong_answer + " Mauvaises réponses et " + good_answer + " Bonnes réponses sur " + (good_answer + wrong_answer) + " questions répondues";
    } else if (wrong_answer <= 1 && good_answer <= 1) {
        document.getElementById('note_finale').innerHTML = "Vous avez eu " + wrong_answer + " Mauvaise réponse et " + good_answer + " Bonne réponse sur " + (good_answer + wrong_answer) + " question répondue";
    } else if (wrong_answer <= 1 && good_answer > 1) {
        document.getElementById('note_finale').innerHTML = "Vous avez eu " + wrong_answer + " Mauvaise réponse et " + good_answer + " Bonnes réponses sur " + (good_answer + wrong_answer) + " questions répondues";
    } else if (wrong_answer > 1 && good_answer <= 1) {
        document.getElementById('note_finale').innerHTML = "Vous avez eu " + wrong_answer + " Mauvaises réponses et " + good_answer + " Bonne réponse sur " + (good_answer + wrong_answer) + " questions répondues";
    }
    document.getElementById('question').innerHTML = "Voulez-vous recommencer?";
    document.getElementById('en_accord').style.visibility = "visible";
    document.getElementById('en_desaccord').style.visibility = "visible";
    wrong_answer = 0;
    good_answer = 0;
    result = 0;
}
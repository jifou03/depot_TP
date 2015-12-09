/**
 * Created by ibarry on 01/12/2015.
 */

"use strict";

var result;
var tab_res = new Array("image_puzzle/1.png", "image_puzzle/2.png", "image_puzzle/3.png", "image_puzzle/4.png", "image_puzzle/5.png", "image_puzzle/6.png"
    , "image_puzzle/7.png", "image_puzzle/8.png", "image_puzzle/9.png", "image_puzzle/10.png", "image_puzzle/vide.png", "image_puzzle/11.png");
var final = new Array("image_puzzle/1.png", "image_puzzle/2.png", "image_puzzle/3.png", "image_puzzle/4.png", "image_puzzle/5.png", "image_puzzle/6.png"
    , "image_puzzle/7.png", "image_puzzle/8.png", "image_puzzle/9.png", "image_puzzle/10.png", "image_puzzle/11.png", "image_puzzle/vide.png");
function win() {

    result = (tab_res.length) == (final.length);

    if (result) {
        for (var i = 0; i < final.length; i++) {
            var src =document.images[i].src
            var src_sub = src.substring(37);

            if (src_sub != final[i]) {
                result = false;

                break;
            }
        }

        regarder();

    }
}

var posVide = 0;

function change(str) {

    if ((str == posVide - 1) || (str == posVide - 4) || (str == posVide + 1) || (str == posVide + 4)) {


        var idCurrent = document.getElementById('id' + str).innerHTML;

        var idVide = document.getElementById('id' + posVide).innerHTML;

        document.getElementById('id' + str).innerHTML = idVide;
        document.getElementById('id' + posVide).innerHTML = idCurrent;

        posVide = str;



    }
}

function regarder() {
    if (result) {

        var image = '<img src = "image_puzzle/messagefinall.png" id = "msg" alt ="image introuvable"  />';

        document.getElementById('div_un').innerHTML = image;


    }
    else {

        alert('Toutes les pièces ne sont pas rangés dans le bon ordre')
    }
}


document.addEventListener("DOMContentLoaded", function () {

    //declaration d'une variable qui definit un tableau correspondant au tableau initiale
    var tab_init = new Array("image_puzzle/1.png", "image_puzzle/2.png", "image_puzzle/3.png", "image_puzzle/4.png", "image_puzzle/5.png", "image_puzzle/6.png"
        , "image_puzzle/7.png", "image_puzzle/8.png", "image_puzzle/9.png", "image_puzzle/10.png", "image_puzzle/11.png", "image_puzzle/vide.png");

    //declaration d'un tableau qui prendra les mofications du tableau initiale de 12 cases
    var tab_mod = [];


    //declaration dune fonction qui renvoi un chiffre aleatoire
    function chiffre_aleatoire() {

        var j;
        while (tab_init.length > 0) {
            j = Math.round(Math.random() * (tab_init.length - 1));

            tab_mod.push(tab_init[j]);

            tab_init.splice(j, 1);

        }

        for (var i = 0; i < tab_mod.length; i++) {

            document.images[i].src = tab_mod[i];
            if (tab_mod[i] == 'image_puzzle/vide.png') {
                posVide = i + 1;

            }
        }
    }

    document.getElementById('melange').addEventListener('click', chiffre_aleatoire);

    document.getElementById("solution").addEventListener("click", function () {

        tab_init = new Array("image_puzzle/1.png", "image_puzzle/2.png", "image_puzzle/3.png", "image_puzzle/4.png", "image_puzzle/5.png", "image_puzzle/6.png"
            , "image_puzzle/7.png", "image_puzzle/8.png", "image_puzzle/9.png", "image_puzzle/10.png", "image_puzzle/11.png", "image_puzzle/vide.png");
        for (var i = 0; i < tab_init.length; i++) {
            document.images[i].src = tab_init[i];

        }
    });

    document.getElementById('envoyer').addEventListener('click', win);


    document.getElementById("solution").addEventListener("click", function () {
        

        for (var i = 0; i < tab_res.length; i++) {
            console.log('function solution');
            document.images[i].src = tab_res[i];

        }
        posVide = 11;

    });

});
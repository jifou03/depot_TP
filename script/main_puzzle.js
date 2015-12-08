/**
 * Created by ibarry on 01/12/2015.
 */

"use strict";

var reussi;

var final = new Array("1.png", "2.png", "3.png", "4.png", "5.png", "6.png"
    , "7.png", "8.png", "9.png", "10.png", "11.png", "vide.png");
function win(){
    console.log('fonction win');
    for(var i = 0; i<12 ; i++)
    {
        if( (document.images[i].src).indexOf(final[i],0 == -1) )
        {
            reussi = false;
        }

        else{

            reussi = true;
        }

    }
    console.log(reussi);
    regarder();
}


var posVide=0;

function change(str) {

    if((str==posVide-1) || (str==posVide-4)   || (str==posVide+1)  || (str==posVide+4) ) {
       // console.log("str apres",str);
//knh
        var idCurrent=   document.getElementById('id'+str).innerHTML;
        //console.log("idcurrent avan",idCurrent);
        var idVide=document.getElementById('id'+posVide).innerHTML;
        //console.log("idvide",idVide);
        document.getElementById('id'+str).innerHTML=idVide;
        document.getElementById('id'+posVide).innerHTML=idCurrent;
        //console.log("idcurrent apres affectation",idCurrent);
        posVide=str;
       // console.log("posvide apres remplacent",posVide);


    }
}

function regarder () {
    if(reussi == false){
        console.log('si on gagne');
        var image = '<img src = "messagefinall.png" alt ="image introuvabe "/>';
        document.getElementById('div_un').innerHTML = image;
        document.getElementById('melange').value ="Rejoué";
        document.getElementById('envoyer').innerHTML ="";
        /*var str = '<img src =="messagefinall.png">';

         document.getElementById('').innerHTML =str;
         document.getElementById('melange').value ="rejoué";
         document.getElementById('envoyer').innerHTML ="";*/
    }
}






document.addEventListener("DOMContentLoaded", function(){

    //declaration d'une variable qui definit un tableau correspondant au tableau initiale
    var tab_init = new Array("1.png", "2.png", "3.png", "4.png", "5.png", "6.png"
        , "7.png", "8.png", "9.png", "10.png", "11.png", "vide.png");

    //declaration d'un tableau qui prendra les mofications du tableau initiale de 12 cases
    var tab_mod = [];




    //declaration dune fonction qui renvoi un chiffre aleatoire
    function chiffre_aleatoire(){

        var j;
        while (tab_init.length>0)
        {
            j = Math.round(Math.random()*(tab_init.length-1));

            tab_mod.push(tab_init[j]);

            tab_init.splice(j,1);

        }

        for(var i = 0; i<tab_mod.length; i++)
        {

            document.images[i].src = tab_mod[i];
            if(tab_mod[i]=='vide.png'){
                posVide=i+1;

            }
        }
    }

    document.getElementById('melange').addEventListener('click', chiffre_aleatoire);

    document.getElementById("solution").addEventListener("click",function(){

        tab_init = new Array("1.png", "2.png", "3.png", "4.png", "5.png", "6.png"
            , "7.png", "8.png", "9.png", "10.png", "11.png", "vide.png");
        for(var i = 0; i<tab_init.length; i++)
        {
            document.images[i].src = tab_init[i];

        }
    });

  /*  var table = document.querySelectorAll("#idtable td");
    var n = 0;
    console.log( table);
    console.log(table.length);
    for(var i =0 ; i< table.length ;i++)
    {  console.log("boucle for addevent listener");
        table[i].addEventListener("click",function(){
            for(var i =0 ; i< table.length ;i++){
            change(i);
            console.log("change(i)",i);}

        });

    }
*/
    document.getElementById('envoyer').addEventListener('click',win);


    document.getElementById("solution").addEventListener("click",function(){
        console.log('function solution');
        console.log(tab_mod);
        var tab_res =  new Array("1.png", "2.png", "3.png", "4.png", "5.png", "6.png"
            , "7.png", "8.png", "9.png", "10.png","vide.png" , "11.png" );
        for(var i = 0; i<tab_res.length; i++)
        {
            console.log('function solution');
            document.images[i].src = tab_res[i];

        }
        posVide=11;

    });

});
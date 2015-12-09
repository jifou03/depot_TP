"use strict";
document.addEventListener("DOMContentLoaded",function(){
    console.log('démarage');


    var images = ["images/memoire/carte_recto_0.jpg","images/memoire/carte_recto_0.jpg","images/memoire/carte_recto_1.jpg","images/memoire/carte_recto_1.jpg","images/memoire/carte_recto_2.jpg",
        "images/memoire/carte_recto_2.jpg","images/memoire/carte_recto_3.jpg","images/memoire/carte_recto_3.jpg","images/memoire/carte_recto_4.jpg","images/memoire/carte_recto_4.jpg",
        "images/memoire/carte_recto_5.jpg","images/memoire/carte_recto_5.jpg","images/memoire/carte_recto_6.jpg","images/memoire/carte_recto_6.jpg","images/memoire/carte_recto_7.jpg",
        "images/memoire/carte_recto_7.jpg","images/memoire/carte_recto_8.jpg","images/memoire/carte_recto_8.jpg","images/memoire/carte_recto_9.jpg","images/memoire/carte_recto_9.jpg",
        "images/memoire/carte_recto_10.jpg","images/memoire/carte_recto_10.jpg","images/memoire/carte_recto_11.jpg","images/memoire/carte_recto_11.jpg"];



    Array.prototype.melange = function() {
        var i = this.length, j, temp;
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
        }
        return this;

    };
    var result = images.melange();
    console.log(result);

    for (var i = 0 ; i < result.length ; i++) {
        var new_arr = document.getElementsByClassName("cartes")[i];
        var attr_src = document.createElement('img');
        attr_src.setAttribute("src" , result[i] );
        new_arr.appendChild(attr_src);
    }

    $(".cartes").click(function(){
        $(this)
            .children('img')
            .css({'visibility': 'visible'});
        console.log(this);
    });

    $("#refresh").click(function(){
        window.location.assign("http:multijeux.projetisi.com/memoire.html");
        console.log("http:multijeux.projetisi.com/memoire.html")
    });

    $("#back").click(function(){
        window.location.assign("http://multijeux.projetisi.com/index.html");
        console.log("http://multijeux.projetisi.com/index.html")
    });


});


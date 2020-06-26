// LES SELECTEURS EN jQuery

$(document).ready(function () {
    // on cible un élément html
    //$("button").click(function () {
    //$("p").hide();   //on cible tous les P et on les cachent
    //});

    // cibler un élément avec son id
   // $("button").click(function () {
      //  $('#test').hide();
    //});

    // cibler un élément avec sa classe
   // $("button").click(function () {
    //    $('.maClasse').hide();
    //});

    // cibler tous les éléments de la page
    //$("button").click(function () {
     //   $('*').hide();
    //});

    // cibler l'élément p qui a la classe maClasse
   // $("button").click(function () {
     //   $('p.maClasse').hide();
    //});

   // cibler le 1er élément p
    // $("button").click(function () {
     // $('p:first').hide();
   // });

     //cibler le 1er élément li du 1er ul
        $("button").click(function () {
        $('ul li:first').hide();
         });


});




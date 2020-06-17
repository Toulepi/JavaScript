    // LES BOOLEANS
    //=============

//let estVrai = true;
//let estFaux = false;

    // opérateur de négation

//console.log(estVrai);
//console.log(!estVrai);

    //Parenthèse en passant

/*
        console.log("a" < "b");
        console.log("A" > "b");
        console.log(0 == " ");

        let age = 20;
        if (age >= 25){
           // console.log("Super Division");
        } else if((age >=18) && (age < 25)){
          //  console.log("Vous êtes en division senior");
} else{
  //  console.log("Vous êtes en division junior");
}

let condition = false;
condition = 0;
condition = ' ';
condition=NaN;
condition = undefined;
condition = null;

condition = true;  // la condition est vraie
condition = 2;      // condition est considérée comme vraie
condition='dqsfdqd';  // condition considérée comme vraie

if(condition){
    console.log("condition vérifiée!!!");
}

 */


    // OPERATEUR TERNAIRE

    //let message;

//message = ( age >= 18 ? "Vous êtes majeur(e)" : "Vous êtes mineur(e)" );
// si age>=18 alors message prend la valeur "vous etes majeur"

// SWITCH
//=======

let numeroDuJour = Number(prompt("saisir le numero du jour de la semaine"));
let message;

switch (numeroDuJour) {
    case 1:   //dans le cas où numeroDuJour vaut 1, mesage prend la valeur lundi
        message = "lundi";
        break;
    case 2:
        message = "mardi";
        break;
    case 3:
        message = "mercredi";
        break;
    case 4:
        message = "jeudi";
        break;
    case 5:
        message = "vendredi";
        break;
    case 6:
        message = "samedi";
        break;
    case 7:
        message = "dimanche";
        break;
    default:
        message = "Jour inconnu du système";
        break;
}

    alert(`votre saisie correspond au jour ${message}`);
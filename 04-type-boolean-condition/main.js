    // LES BOOLEANS
    //=============

let estVrai = true;
let estFaux = false;

    // opérateur de négation

//console.log(estVrai);
//console.log(!estVrai);

    //Parenthèse en passant

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
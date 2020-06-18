// NOTIONS DES OBJETS EN JAVASCRIPT
//+++++++++++++++++++++++++++++++++

//déclaration à éviter
/*
let personne = new Object();
personne.prenom = "Toulepi";
personne.age = 34;
personne.sexe = 'M';
console.log(personne);
*/

//on va préférer la notation JSON (Javascript Object Notation)
/*
let personne = { prenom: 'Toulepi', age: 30, sexe: 'M' };
console.log(personne);
console.log(personne.age);
console.log(personne['age']);  // autre notation de personne.age

console.log(typeof personne);  // Object
let personneProps = Object.getOwnPropertyNames(personne); //permet de récupérer la liste des propriétés de l'Objet personne

console.log(personneProps); //  [ 'prenom', 'age', 'sexe' ]
*/

        // NOTION DE FONCTION EN JS
        //+++++++++++++++++++++++++
/*
let a = 3;
let b = 6;
//je défini une fonction
function addition() {
    let a = Number(prompt("a"));
    let b = Number(prompt("b"));
    let resultat = a + b;
    console.log(resultat);
}

//Appel de la fonction
addition();
*/

function addition(a = 2,b = -7) {  // la fonction est définie avec des paramètres par défaut
    let resultat = a+b;
    return resultat;
}
console.log(addition(-6,2,23));

function addition(...listArg){  //fonction définie avec un nombre d'arguments inconnus
    let resultat = 0;
    for (const valeur of listArg) {
        resultat += valeur;
    }
    return resultat;
}

// définition anonyme d'une fonction
let addition2 = function(...listArg){  //fonction définie de façon anonyme, en général en passant
    let resultat = 0;
    for (const valeur of listArg) {
        resultat += valeur;
    }
    return resultat;
}
addition2(5);


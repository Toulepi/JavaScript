/*
    //LES NOMBRES EN Javascript

let addition = 24 + 5.3;
console.log(`resultat = ${addition}`);

let multiplication = 25 * 3.5;
console.log(`multiplication = ${multiplication}`);

let division = 25 / 5;
console.log(`division = ${division}`);

let modulo = 45 % 8;
console.log(`modulo = ${modulo}`);

    // ORDRE DE PRIORITE DES OPERATIONS
console.log(3-9*2);

    // LES EXPOSANTS
    //==============
console.log(2 ** 3);  // 2 exposant 3

    // LE NOMBRE NaN ou Not a Number
    //==============================

resultat = 0/0;
console.log(`resultat = ${resultat}`);
console.log(typeof resultat);

resultat = 1 + NaN;
console.log(`resultat = ${resultat}`);
console.log(typeof resultat);

 */

        //LES OPERATEURS D'ASSIGNATION
        //============================

//let x = 3;
//x = x + 4;
//console.log(`x = ${x}`);

let y = 3;
//console.log(`y = ${y}`);

y += 4;  // y = y + 4
y -= 1; // y = y - 1
y *=1; // y = y*1
y /=5; // y = y / 5
y %= 2; // y = y % 2
y++ // y = y + 1 opérateur de post-incrémentation
y-- // y = y - 1
++y // y = y + 1 opérateur de préincrémentation

let a = 25, x = 3;
let resultat = a + x++;  // l'addition a+x s'effectue avant l'incrémentation x=x+1
//console.log(`resultat = ${resultat}`);

        // LES ARRONDIS

console.log(Math.floor(0.9));  // donne la partie entière d'un nombre
console.log(Math.floor(1.1));

Math.round(0.49);  // arrondi vers l'entier le plus proche
console.log(Math.floor(0.5));
Math.floor(2.9);

Math.ceil(0.1);  // arrondi vers l'entier supérieur
Math.ceil(0.9);


        // GENERATEUR DE NOMBRE ALEATOIRE

let aleatoire = Math.random()*101;  // cette fonction génère des nombres compris dans l'intervalle [0,1[
//console.log(`aleatoire = ${aleatoire}`);

console.log(`aleatoire = ${Math.floor(aleatoire)}`);  // permet d'afficher les nombres entiers de l'intervalle [0,101[

        // OPERATEURS DE COMPARAISON

console.log(4 < 5);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 <= 4);
console.log(4 >= 4);
console.log(4 > 3);
console.log(4 == 4);
console.log(4 == '4');  // compare juste les valeurs
console.log(5 === '5');  // compare les valeurs et les types


        // LES CHAINES DE CARACTERES
        //++++++++++++++++++++++++++

//let maChaine = "Chien"; // la chaîne de caractères Chien peut-être considérée comme un [C,h,i,e,n]
//Déclaration d'une variable
//console.log(typeof maChaine);

//maChaine.charAt(0);  //la méthode charAt(i) permet de récupérer la valeur d'un élément caractère qui est à la position i
//console.log(maChaine.charAt(0));
//console.log(`longueur = ${maChaine.length}`); // longueur d'une chaîne de caractère

//maChaine = "YouTube";
//console.log(maChaine.substring(1,4));  // la méthode 'substring' récupère les élts de l'intervalle [ maChaine[1],maChaine[2] [
//console.log(maChaine.substring(3,7));  // affiche Tube
//console.log(maChaine.substring(1));  // affiche ouTube
/*
let a = 'a';
let b = 'b';
console.log(a<b);  // affiche true

a = 'add';
b = 'b';

a = "a";
b = "B";
console.log(a<b); // false
*/

//let maChaine = "Red Dragon";
//console.log(maChaine.length);
//console.log(maChaine.indexOf("Red"));
//console.log(maChaine.indexOf("RedScale")); // -1; donc RedScale n'existe pas dans maChaine
//remarque: pour par exemple chercher un mot dans une phrase on peut tester si phrase.indexof("mot") retourne -1

//console.log(maChaine.indexOf("Dragon",0)); // donne index du mot
//console.log(maChaine.indexOf("Dragon",4)); //
//console.log(maChaine.indexOf(" ",3));

//console.log(maChaine.startsWith("Red"));// 'true'; est-ce que maChaine commence par Red ?
//console.log(maChaine.endsWith("red")); // false

//let maChaine = "formation,html,css,js,jquery,ajax,merise,sql";
//let resultat = maChaine.split(",")  //la méthode split() permet d'obtenir un tableau à 8 éléments
//console.log(resultat.length);
//console.log(resultat);
//maChaine = "Toulepi";
//console.log(maChaine.split(""));

let maChaine = "La poussière du désert de kalahari!";
let resultat = maChaine.replace("kalahari","midi").replace("poussière","pluie");
console.log(maChaine);
console.log(resultat);





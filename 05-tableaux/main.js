        // LES TABLEAUX
        //+++++++++++++

//DECLARATION
/*
let stagiaires = ['Toulepi','Jeatsa','Kueta','Lonkeng','Mahery','Wouafo','Mbua','Nka'];  // nouvelle notation des tableaux
let numeros = Array(1,23,32,36);
let tabMixed = new Array(true,65,'Mango',null,[33,'Tchinda']);  // tableau mixte

        //Taille du tableau --> length

let taille = stagiaires.length;
console.log(`taille = ${taille}`);

//let taille = numeros.length;
console.log(`taille = ${numeros}`);

//let taille = tabMixed.length;
console.log(`taille = ${tabMixed}`);

    //Accès aux éléments du tableau

console.log(stagiaires[0]) ;
//console.log(stagiaires[8]) ;  // --> undefined

    // Modifier les éléments du tableau
stagiaires[8] = 'Kanouté';
console.log(stagiaires[8]); // on obtient la valeur 'Kanouté'

    // METHODES DE TABLEAUX
    //++++++++++++++++++++

let numeros = [1,2,3,4];
console.log(numeros); // affiche le tableau au complet

numeros.push(7);  // la méthode push() permet d'ajouter en fin de tableau
console.log(numeros.push(7)) ;

numeros.unshift();  // la méthode unshift() permet d'ajouter un élément en début de tableau
console.log(numeros.unshift()) ;

numeros.shift();  // la méthode shift() permet de supprimer le dernier élément en début de tableau
console.log(numeros.shift()) ;

numeros.pop();
console.log(numeros.pop()) ;  // la méthode pop() supprime le dernier élément du tableau et ne prend pas d'argument
*/
// LES BOUCLES
//++++++++++++

// POUR ---> for
/*
for(let i = 1; i <= 1000; i++){
   console.log(i);
}
*/
// TANT QUE  ---> WHILE
/*
console.log("WHILE")
let i=1;
while (i<=10) {
        console.log(i);
        i++;
}

        // REPETER  TANT QUE ---> DO... WHILE

console.log("DO....WHILE")

let compteur = 3;
do {
        console.log(compteur);
        compteur++;
      //mes instructions
}while (compteur<=10)
*/

//let stagiaires = ['Toulepi','Jeatsa','Kueta','Lonkeng','Mahery','Wouafo','Mbua','Nka'];
/*
for (let i = 0; i < stagiaires.length;i++){
        console.log(stagiaires[i]);
}
*/
/*
let i = 0;
while (i<stagiaires.length){
        console.log(stagiaires[i]);
        i++;
}
*/
//FOR...OF  -----> pour accéder aux élts du tableau
/*
let stagiaires = ['Toulepi','Jeatsa','Kueta','Lonkeng','Mahery','Wouafo','Mbua','Nka'];

for (let elt of stagiaires) {  // la boucle parcours le tableau stagiaires et chaque élt est stocké dans la nouvelle variable maVariable
        console.log(elt);  // affiche les elts stockés dans 'maVariable'
}

 */

//FOR...IN  ----> pour accéder aux index du tableau
/*
let stagiaires = ['Toulepi','Jeatsa','Kueta','Lonkeng','Mahery','Wouafo','Mbua','Nka'];
for (let index in stagiaires) {
      console.log(index);
}
*/

// Afficher l'index et la valeur de chaque élément du tableau
/*
let stagiaires = ['Toulepi','Jeatsa','Kueta','Lonkeng','Mahery','Wouafo','Mbua','Nka'];
for (let index in stagiaires) {
        console.log(  `( ${index} , ${stagiaires[index]} )`  );
}
 */

// MOT CLE BREAK
//+++++++++++++

for (let i = 1; i<=10; i++){
        if (i===6){
                break;  // le break permet d'arrèter définitivement la boucle for
        }
        console.log(i);
}

        // MOT CLE CONTINUE
        //+++++++++++++

        for (let i = 1; i<=10; i++){
                if (i===6){
                        continue;  // le continue permet de sauter l'étape i=6 de la boucle for
                }
                console.log(i);
        }











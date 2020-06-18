//6. Line n nombres et en calculer la moyenne

console.log("Combien de nombres voulez-vous saisir pour le calcul de la moyenne ?")

let n, somme, compteur = 0 ;
do{
   n = Number( prompt("Indiquer le nombres de valeurs à saisir"));
}while (Number.isNaN(n));  //la boucle va se repéter tant que n est de type NaN

console.log(`veuillez donner les valeurs des ${n} nombres`);
//let nombres = [];
//let min,indexMin;
//let indexMin;
for (let i = 0; i < n;i++){
    let value = Number( prompt(`Saisir le nombre ${i+1}`));
    if (!Number.isNaN(value)){
       somme += value;
       compteur++;
    }
}
let moy = somme / compteur;
//alert(`La moyenne des nombres saisis est ${moy}`);
console.log(moy);
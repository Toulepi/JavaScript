alert("Combien de nombres voulez-vous saisir pour le calcul de la moyenne ?")
let n = Number( prompt());
alert(`veuillez donner les valeurs des ${n} nombres`)

let nombres = [];
let somme = 0;
//let min,indexMin;
//let indexMin;
for (let i = 1; i<=n;i++){
    nombres[i] = Number( prompt(`Le nombre ${i} est ?`));
       somme += nombres[i];
}
let moy = somme / n;
alert(nombres)
alert(`La moyenne des nombres saisis est ${moy}`);

/*alert("veuillez donner les valeurs de 10 nombres")

let nombres = [];
let min,indexMin, max, indexMax;
//let indexMin;
for (let i = 0; i<10;i++){
    nombres[i] = Number( prompt(`Le nombre ${i+1} est ?`) );  //la conversion d'une saisie en number peut se faire via la multiplication par 1 (*1)
    if ( (min === undefined)||(nombres[i] < min) ){
        min = nombres[i];
        indexMin = i;
    }
    if ( (max === undefined)||(nombres[i] > max) ){
        max = nombres[i];
        indexMax = i;
    }
}
alert(nombres)
alert(`Le plus petit des nombres que vous avez saisi est : ${min} et son rang est: ${indexMin}\n  
Le plus grand des nombres saisis est: ${max} et son rang est ${indexMax}`);
*/

// Correction Prof
//+++++++++++++++
/*
let tableau = [], posMin, valMin, posMax,valMax;

for (let i = 0; i < 10; i++){
    let alea = Math.round( Math.random()*100 - Math.random()*100);
    if ((valMin === undefined) || (alea < valMin)){
        valMin = alea;
        posMin = i;
    }
    if ((valMax === undefined)|| (alea > valMax)){
        valMax = alea;
        posMax = i;
    }
    tableau.push(alea)
}
console.log(tableau)
console.log(`valMin = ${valMin} ==> posMin = ${posMin}`);
console.log(`valMax = ${valMax} ==> posMax = ${posMax}`);
*/
//=============================================================================
//Version 2 avec une fonction

function tableauAleatoire(taille) {
    let tab = [];
    for (let i = 0; i < taille; i++){
    let alea = Math.round( Math.random()*100 - Math.random()*100);
    tab.push(alea)
    }
    return tab;
}
/*
let tableau = tableauAleatoire(10);
let posMin, valMin,posMax,valMax;

for (let value of tableau){
    if (valMin === undefined || valMin > value){
    valMin = value;
    posMin = tableau.indexOf(value);
    }
    if (valMax === undefined || valMax < value){
        valMax = value;
        posMax = tableau.indexOf(value);
    }
}
console.log(tableau)
console.log(`valMin = ${valMin} ==> posMin = ${posMin}`);
console.log(`valMax = ${valMax} ==> posMax = ${posMax}`);
 */

let tableau = tableauAleatoire(10);
let valMin = Math.min(...tableau);
let posMin = tableau.indexOf(valMin);

let valMax = Math.max(...tableau);
let posMax = tableau.indexOf(valMax);

console.log(tableau)
console.log(`valMin = ${valMin} ==> posMin = ${posMin}`);
console.log(`valMax = ${valMax} ==> posMax = ${posMax}`);

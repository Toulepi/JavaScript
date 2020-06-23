// 3. Remplacer tous les caractères d'une chaîne par une *

//let chaine = prompt("Donner une chaîne de caractères");
let chaine = prompt("Indiquer une chaîne de caractères");
//let chaine = "Toulepi";  // chaîne modifiable

let chaineReplace = chaine.split("");

for (let i = 0; i < chaine.length; i++) {
    chaineReplace[i] = '*';
}
chaineReplace = chaineReplace.join("");
console.log(chaine);
console.log(chaineReplace);
// 3. Remplacer tous les caractères d'une chaîne par une *

let chaine = "test";

// afficher directement une chaine de chaine.length '*'
let chaineReplace = chaine.split("");
for (let i = 0; i <chaine.length ; i++) {
    chaineReplace[i] = '*';  // chaine.charAt(i) = "*";
}
chaineReplace.join("");
console.log(chaine);
console.log(chaineReplace);
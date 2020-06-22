// 4.Remplacer toutes les occurrences d'une lettre par une autre dans une chaîne de caractères.
  // penser à utiliser la méthode "include"
let chaine = "testament";
console.log(chaine);

let chaineReplace = chaine.split("")
let lettreRecherche = "t";
console.log(`La lettre recherchée est ${lettreRecherche}`);
let lettreAjoute = "a";
console.log(`La lettre à ajouter est ${lettreAjoute}`);
for (let i = 0; i <chaine.length ; i++) {
    if (chaineReplace[i] == lettreRecherche){
        chaineReplace[i] = lettreAjoute;
    }
}
//console.log(chaineReplace);
chaineReplace = chaineReplace.join("");
console.log(chaineReplace);





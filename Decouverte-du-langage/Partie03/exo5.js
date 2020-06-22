// 5.Supprimer toutes les occurrences d'une lettre dans une chaîne de caractères

let chaine = "testament";
console.log(chaine);

let chaineDelete = chaine.split("")
let lettreSupprime = "t";
console.log(`La lettre à supprimer est ${lettreSupprime}`);

for (let i = 0; i <chaine.length ; i++) {
    if (chaineDelete[i] == lettreSupprime){
        chaineDelete[i] = null;
    }
}
//console.log(chaineReplace);
chaineDelete = chaineDelete.join("");
console.log(chaineDelete);
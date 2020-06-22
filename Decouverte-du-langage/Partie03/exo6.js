// 6.Afficher la présence d'une lettre dans une chaîne (si oui, en afficher le nombre (quantité, si non, afficher "absent")

let chaine = "justement";
console.log(chaine);
// pour récupérer un elt d'une chaîne utiliser charAt(i)
let chaineTab = chaine.split("");
let lettreRecherche = "a";
console.log(`La lettre à recherché est ${lettreRecherche}`);
let compteur = 0;
for (let i = 0; i <chaine.length ; i++) {
    if (chaineTab[i] == lettreRecherche){
        compteur++;
    }
}
if (compteur == 0){
    console.log(`absent`);
} else {
    console.log(`La lettre ${lettreRecherche} apparaît ${compteur} fois dans la chaîne`);
}



// 4.Remplacer toutes les occurrences d'une lettre par une autre dans une chaîne de caractères.
  // penser à utiliser la méthode "include"
let chaine = prompt("Veuillez donner une chaîne de caractères");
let chaineReplace = chaine.split("");

let lettreRecherche = prompt("L'occurence de quelle lettre est recherchée ?")
let lettreAjoute = prompt("Quelle est la lettre qui remplace les occurences de la lettre recherchée ?");

for (let i = 0; i <chaine.length ; i++) {
    if (chaineReplace[i] == lettreRecherche){
        chaineReplace[i] = lettreAjoute;
    }
}
chaineReplace = chaineReplace.join("");

//console.log(`La lettre à ajouter est ${lettreAjoute}`);
//console.log(`La lettre recherchée est ${lettreRecherche}`);
alert(`Votre chaîne est ${chaine}, \n les occurences recherchées sont celles de la lettre ${lettreRecherche}
\n la lettre à ajouter est ${lettreAjoute} \n La chaîne résultat est donc ${chaineReplace}`);






//2. Inverser une chaîne de caractère sans supprimmer l'originale

//let chaine = "developpeur";
let chaine = prompt("Quelle est le chaîne de caractères à inverser ?");
let chaineInverse = chaine.split("").reverse().join("");

//console.log(chaine);
//console.log(chaineInverse);
alert(`La chaine inverse de ${chaine} est : ${chaineInverse}`)
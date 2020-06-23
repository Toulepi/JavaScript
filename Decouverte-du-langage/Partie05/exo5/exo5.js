let voy = ["a","e","i","o","u","y"];
let maChaine = prompt("Veuillez indiquer une chaîne de caractères");
//let maChaine = "Toulepi";
console.log(maChaine);
let compteur = 0;

for (let i = 0; i < 6 ; i++) {
    for (let j = 0; j < maChaine.length ; j++) {
        if (voy[i] == maChaine.charAt(j)){
            compteur++;
        }
    }
}
//console.log(`Le nombre de voyelles de la chaîne ${maChaine} est ${compteur}`);
alert(`Le nombre de voyelles de la chaîne ${maChaine} est ${compteur}`)


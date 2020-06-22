// 1. Ecrire la fonction isMultiple, qui prend deux entiers n et m et retourne vrai si et seulement si n est un multiple de m.
let a= Number( prompt("Donner un nombre entier "));
let b= Number( prompt("donner un second nombre entier"));

function isMultiple(n, m) {
    if(n % m == 0) {
        return true
    } else {
        return false
    }
}
alert(`${a} est un multiple de ${b} : ${isMultiple(a,b)}`);
//console.log(isMultiple(a,b));

// gérer les mauvaises saisies user

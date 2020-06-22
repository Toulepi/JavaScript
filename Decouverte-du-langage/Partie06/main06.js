//Ecrire une fonction qui permet de calculer la factorielle d'un nombre saisi par l'utilisateur.
// « On rappelle que (factorielle N = N! = 1x2x…xN et 0! = 1) ».

let m = Number(prompt("Veuillez saisir un nombre entier N"));
// il faudra gérer les mauvaises saisies user
function factorielle(n) {

    if (n >0) {
        return n * factorielle(n - 1)
    } else {
        return 1
    }
}
console.log(factorielle(m));
alert(`Le factorielle de ${m} est ${factorielle(m)}`)

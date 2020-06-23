// 4. Ecrire une fonction qui prend un entier n et retourne la somme des entiers inférieurs ou égal à la valeur absolue de n

let n = Number(prompt("Saisir un nombre entier "));
// prévoir les mauvaises saisies user

function somme(m) {
    if (m < 0) {
        return somme(-m)
    } else if (m === 0) {
        return 0
    } if (m >= 1) {
        return m + somme(m - 1)
    }
}
console.log(somme(n));
alert(`La somme des entiers inférieurs ou égal à la valeur absolue de ${n} est ${somme(n)}`)

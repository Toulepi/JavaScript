// 2. Ecrire une fonction isEven() qui prend un entier i et retourne vrai s'il est pair
let a =Number( prompt("Donner la valeur d'un nombre entier"));
function isEven(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else if (n < 0) {
        return isEven(-n);
    } else
        return isEven(n - 2);
}
alert(`Le nombre ${a} est pair: ${isEven(a)}`)



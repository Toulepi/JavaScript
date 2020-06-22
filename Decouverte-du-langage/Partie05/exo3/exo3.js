// 3.Un nombre est n premier s'il a seulement deux diviseurs : 1 et n. Ecrire une fonction isPremier qui permet de tester si un nombre saisi par
// l'utilisateur est premier ou non

let n = Number( prompt("veuillez saisir un nombre entier"));
let premier = false;
for (let i = 2; i < n ; i++) {
    if (n % i === 0){
        alert(`Le nombre ${n} n'est pas premier`);
        break;
    }
    premier = true;
}
if (premier){
    alert(`Le nombre ${n} est premier`);
}


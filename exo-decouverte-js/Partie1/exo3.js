//=============================================
//Saisir deux nombres n et m. Dans le cas où n est supérieur à m
//=============================================================

let m = Number( prompt("m="));
let n = Number( prompt("n"));

if (n > m){
    console.log("n doit être inférieur à m");
}

//b. Permuter n et m, puis afficher les nombres de n à m, ==> TODO

//c.Afficher les nombres de n à m de manière décroissante.
if (n>m){
    for (let i = n;i >=m; i--){
        console.log(i);
    }
}

//d.Afficher la somme des nombres pairs de n à m.
let somme = 0;
if (n > m){
    for (let i = n; i >=m; i++){
        if (i%2===0){
            somme +=i;
        }
    }
}
console.log(somme);





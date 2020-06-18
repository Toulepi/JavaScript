// Dire si une valeur existe dans un tableau trié
let tab = [];

for (let i =0;i<5;i++){
    tab[i] = Math.floor( Math.random()*100 );
}
console.log(tab)
alert(tab)

// trie du tableau tab
for (let i = 0; i<4;i++){
    for (let j = i+1; j<5;j++){
        if (tab[j] < tab[i]){
            let temp = tab[i];
            tab[i] = tab[j];
            tab[j] = temp;
        }
    }
}
console.log("le tableau trié est le suivant:")
console.log(tab)

alert("le tableau trié est le suivant:")
alert(tab)

//console.log(prompt("la valeur à rechercher est :"));
let valeur = Number( prompt("la valeur à rechercher dans le tableau est :") );

//let valeur = Math.floor( Math.random()*100);
//recherche d'une valeur dans un tableau trié
let existe = false;
let i = 0;
while (i<5){
    if (valeur === tab[i]){
        console.log(`La valeur ${valeur} existe`);
        alert(`La valeur ${valeur} existe`);
        break;
    }
    if (i===5){
        alert(`La valeur ${valeur} n'existe pas`);
        i++
    }
}
//code à terminer cas où la valeur n'existe pas à traiter
//console.log(`la valeur ${valeur} n'existe pas dans le tableau`);


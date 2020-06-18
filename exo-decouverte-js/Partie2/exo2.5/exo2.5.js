// Fusionner deux tableaux déjà triés par ordre croissant
let tab1 = [];
let tab2 = [];

for (let i =0;i<5;i++){
    tab1[i] = Math.floor( Math.random()*100 );
    tab2[i] = Math.floor( Math.random()*100 );
}
console.log(tab1)
console.log(tab2)
// trie des tableaux tab1 et tab2
for (let i = 0; i<4;i++){
    for (let j = i+1; j<5;j++){
        if (tab1[j] < tab1[i]){
            let temp = tab1[i];
            tab1[i] = tab1[j];
            tab1[j] = temp;
        }
        if (tab2[j] < tab2[i]){
            let temp = tab2[i];
            tab2[i] = tab2[j];
            tab2[j] = temp;
        }
    }
}

console.log("le premier tableau trié est:")
console.log(tab1)
//console.log(tab1.sort())
console.log("le second tableau trié est:")
console.log(tab2)
//console.log(tab2.sort())

let tabFuse = (tab1.sort()).concat(tab2.sort())
console.log(`la fusion des tableaux est la suivante:`)
console.log(tabFuse)


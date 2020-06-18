// Trier un tableau de 10 éléments par ordre croissant

alert(`Saisir les 10 elements à trier`)

let trie = [];
for (let i = 0; i<10;i++) {
    trie[i] = Number(prompt(`Le nombre ${i+1} est ?`));
    //nombres.push( nombres[i] )
}

for (let i = 0; i<9;i++){
    for (let j = i+1; j<10;j++){
        if (trie[j] < trie[i]){
            let temp = trie[i];
            trie[i] = trie[j];
            trie[j] = temp;
        }
    }
}
alert(`Le tableau trié par ordre croissant est:`)
alert(trie)

console.log(`Le tableau trié par ordre croissant est:`)
console.log(trie)

//question: la methode sort() semble ne pas trier par ordre croissant
// alert(trie.sort())
// Inverser les éléments d'un tableau de 10 éléments (sans passer par un tableau intermédiaire).

alert(`veuillez donner les valeurs de 10 nombres`);

let nombres = [];
for (let i = 0; i<10;i++) {
    nombres[i] = Number(prompt(`Le nombre ${i+1} est ?`));
    //nombres.push( nombres[i] )
}

//utiliser la méthode reverse
alert(nombres);
console.log(nombres)
//console.log("Le tableau inversé est:")
alert(`Le tableau inversé est le suivant:`)
alert(nombres.reverse())
console.log(nombres.reverse());

//Question: le tableau est inversé dans la boîte d'alerte mais pas dans la console



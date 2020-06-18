alert("veuillez donner les valeurs de 10 nombres")

let nombres = [];
let min,indexMin;
//let indexMin;
for (let i = 0; i<10;i++){
    nombres[i] = Number( prompt(`Le nombre ${i+1} est ?`));
    //on peut aussi utiliser la méthode push(), au lieu de fixer la taille du tableau avant la saisie utilisateur
   //par exemple nombres = nombres.push(nombres[i]);
    if ( (min === undefined)||(nombres[i] < min) ){
        min = nombres[i];
        indexMin = i;
    }
}
//let min = nombres[0];
//let indexMin = 0;
/*
    for (i = 1;i<10;i++){
        if (min>nombres[i]){
            min = nombres[i];
            indexMin = i;
        }
    }
 */
alert(nombres)
alert(`Le plus petit des nombres que vous avez saisi est ${min} et son rang est ${indexMin}`);

// Le présent code a été factoriser en supprimant la seconde boucle for qui est ici en commentaire
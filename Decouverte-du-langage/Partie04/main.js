// Prix du lot

let prixLot = Math.round(Math.random() * 1001);
console.log(`Le prix du lot est ${prixLot}`);
let essais = 0;
alert(`Le jeu consiste à découvrir par essais successifs le prix d'un lot .\n Le prix du lot est compris entre 1 et 1000`);
let prixUser;
do{
   prixUser = Number(prompt("Quelle est votre estimation ?"));
    if (prixUser < prixLot) {
        essais++;
        alert('Trop petit');
    } else if(prixUser > prixLot){
        alert('Trop grand');
        essais++;
    } else {
        alert(`Bravo vous avez trouvé en ${essais} essais`)
    }
}while (prixUser !== prixLot) //isNaN(prixUser))

// il faudra gérer les mauvaises saisies user

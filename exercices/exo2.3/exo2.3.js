let poids, taille, imc;
console.log("Veuillez indiquer votre poids");
poids = Number( prompt("poids=") );

console.log("Veuillez indiquer votre taille  en mètre");
taille = Number( prompt("taille=") );

imc = poids / (taille**2);

if (imc<18.5){
   //console.log("Insuffisance pondérale");
   alert("Insuffisance pondérale")
}
if(imc >= 18.5 && imc < 25){
   // console.log("Votre poids est normal");
    alert("Votre poids est normal")

}
if(imc >= 25 && imc < 30){
    //console.log("vous êtes en surpoids");
    alert("vous êtes en surpoids")
}
if(imc>=30){
   // console.log ("Obésité");
    alert("Obésité")
}

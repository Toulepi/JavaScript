/*
function somme(a, b) {
    return a + b;
}

somme(5, -8);
let modulo = function (a, b) {  //fonction définie de façon anonyme
    return a % b;
}
modulo(9, 4);
let division = (a, b) => {   // expression lamda, "function(a,b)" est remplacé par "(a,b)"
    return a / b;
}
let message;

function auSecours() {
    let message = `A l'aide, je suis pris au piège par les flammes`;
}
auSecours(message);  // message ici est locale à la fonction
console.log(message); //message ici est global

let rayon = 8;
if (rayon > 7){
    const PI = Math.PI;
    let peri
}

let externe = () => {
    let hero = "Spiderman";
    function interne() {
        let appelAide = `${hero}, s'il te plaît aide-moi`;
        console.log(appelAide);
    }
    interne();
}
externe()   // affiche "Spiderman, s'il te plaît aide-moi"
interne()  // fonction interne() inconnue, cette fonction est locale
 */
function definieDeuxFois(func) {
    func();
    func();
}
function rire(){
    console.log("AHAHAHAHAHAHHAh");
}
definieDeuxFois(rire);  // rire() ici est une fonction de rappel encore appelée callback

let tab = [1,2,3,4];
let tabMap = tab.map(function(i){
    return i*3;
});
//tab.map(i => i*3) identique à tab.map(function(i){ return i*3; })



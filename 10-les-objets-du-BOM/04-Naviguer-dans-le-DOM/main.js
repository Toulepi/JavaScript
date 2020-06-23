//let p = document.querySelector('p');
//let div = p.parentNode;  //récupère le noeud parent i.e la div
//console.log(div);
//div.style.color = "blue";

let b = document.body;
console.log(b);
let div = b.childNodes[3];
console.log(div);
let pPremier = div.childNodes[1]; // récupère le premier paragraphe (premier enfant) de la 'div'

let tousLesP = document.getElementsByClassName("para");
console.log(tousLesP);

let premierElt = tousLesP[0].firstChild;
console.log(premierElt);



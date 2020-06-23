// Crée par Joachim Zadi le 21/06/2020 à 16:24
// ===========================================

// Recuperer le contenu du tag h1
// ******************************

//let premierH1 = document.querySelector('h1');
//console.log(premierH1.innerText);
//console.log(premierH1.textContent);  // permet de récupérer le texte

//document.querySelector("a").textContent = "www.camer.be"; // récupère et modifie le premier elt <a>
        // "querySelector"
        //+++++++++++++++
        //document.querySelector("#titreHeader").textContent = "www.camer.be"; // sélecteur d'id
        //document.querySelector(".nav-item").textContent = "www.camer.be";  // sélecteur de classe

// Modifier le contenu du tag h1
// *****************************

//premierH1.textContent = "Titre modifié par Javascript";  // permet de récupérer et modifier le contenu texte de la balise <h1>
//premierH1.innerHTML = "<div style='color: red'>Titre modifié par Javascript</div>";


// Modifier le contenu HTML du tag h1
// **********************************

//TODO

// Exercices  Modifier les "Links" en "liens"
// *********
/*
let Liens = document.querySelectorAll("a");  //retourne une liste (donc un tableau ) à 9 éléments
console.log(Liens);
Liens[6].textContent = "Lien 6";
Liens[7].textContent = "Lien 7";
Liens[8].textContent = "Lien 8";
*/

// Modifier l'attribut d'un element
// ********************************

document.querySelector('a').href="https://www.w3schools.com/";
document.querySelectorAll('.container')[0].className = 'container-fluid'; // ici queryselectorAll renvoi un tableau et donc il faut identifier l'elt du tab par
//sa position avant de pouvoir lui appliquer 'className'

// Modifier le style d'un element
// ******************************

document.querySelector('#titreHeader').style.color = "red";
document.getElementById('#titreHeader').style.fontSize = "5rem";
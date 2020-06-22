  // le nom d'une classe commence toujours par une majuscule
  class Personne {
       prenom;
       age;
       conjoint;

       constructor(p,a){
       this.prenom = p;
       this.age = a;
       }
       // methode = fonction à l'intérieur d'une classe
       seMarier(autrePersonne){
           if (this.age >= 18 && autrePersonne.age >= 18 && this.conjoint === undefined && autrePersonne === undefined){
              this.conjoint = autrePersonne;
              autrePersonne = this; // 'this' ici représente l'objet courant (objet sur lequel on travaille)
           }
       }
       affichePersonne(){
           let affichage = `${this.prenom}, ${this.age} ans\n`;
           if (this.conjoint !== undefined){
               affichage += `a pour conjoint ${this.conjoint.prenom},${this.conjoint.age} ans`;
           }
           return affichage;
       }
}
let personneToulepi = new Personne("Toulepi","33");
let personneMane = new Personne("Mane","23");
//Toulepi.age = 32;
//Toulepi.prenom = "Toulepi";
//Toulepi.conjoint = null;
  personneToulepi.seMarier(personneMane);
//console.log(personneToulepi.affichePersonne());

  let autrePersonne = new Personne("Mane","23")


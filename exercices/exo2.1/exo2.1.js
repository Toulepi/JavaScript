let a,b;

alert("Donner la valeur d'un nombre a")
a = Number (prompt("a="));
alert("Donner la valeur d'un second nombre b")
b = Number (prompt("b="));

//console.log()

if ( (a<0 && b<0)||(a>0 && b>0) ){
    alert("Le produit de a et b est positif");
} else {
    alert("Le produit de a et b est négatif");
}
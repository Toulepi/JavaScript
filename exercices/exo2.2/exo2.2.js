let pht, nb_article, taux_tva, pttc;
alert("Entrer le prix hors taxe");
pht = Number( prompt("pht=") );

alert("Entrer le nombre d'articles");
nb_article = Number( prompt("nb_article=") );

alert("Entrer le taux de la TVA");
taux_tva = Number( prompt("taux_tva=") );
pttc = pht*(1+taux_tva/100)*nb_article
alert(`Le prix TTC est pttc = ${pttc} € `);

//alert(`Le prix TTC est pttc = ${pttc} € `);
//console.log(pttc);



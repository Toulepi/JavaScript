let r , aire, volume;
console.log("Donner la valeur en mètre du rayon r d'une sphère");
r = Number(prompt("r="));

aire = 4 * Math.PI * (r**2);
//console.log(`L'aire de la sphère en m² est:`);

alert(`aire = ${aire}`);

volume = 4 * Math.PI * (r**3) / 3;

//alert(`Le volume de la sphère est:`);
alert(`volume = ${volume}`);
//console.log(volume);
alert("veuillez donner les valeurs de 10 nombres");

let nombres = [0,1,2,3,4,5,6,7,8,9];  // on peut ici créer un tableau vide nombres[ ]

for (let i = 0; i<10;i++){
    nombres[i] = Number( prompt(`Le nombre ${i+1} est ?`));
}
let max = nombres[0];
for (i = 1;i<10;i++){
    if (max<nombres[i]){
        max = nombres[i];
    }
}
alert(`Le plus grand des nombres que vous avez saisi est ${max}`);

//ce code peut-être factoriser notamment en utilisant une seule boucle for voir exo5.js

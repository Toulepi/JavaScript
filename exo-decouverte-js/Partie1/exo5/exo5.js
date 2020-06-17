alert("veuillez donner les valeurs de 10 nombres")

let nombres = [];
let min,indexMin;
//let indexMin;
for (let i = 0; i<10;i++){
    nombres[i] = Number( prompt(`Le nombre ${i+1} est ?`));
    if ( (min === undefined)||(nombres[i] < min) ){
        min = nombres[i];
        indexMin = i;
    }
}
//let min = nombres[0];
//let indexMin = 0;
/*
for (i = 1;i<10;i++){
    if (min>nombres[i]){
        min = nombres[i];
        indexMin = i;
    }
}

 */
alert(nombres)
alert(`Le plus petit des nombres que vous avez saisi est ${min} et son rang est ${indexMin}`);
alert("veuillez donner les valeurs de 10 nombres")

let nombres = [];
let min,indexMin, max, indexMax;
//let indexMin;
for (let i = 0; i<10;i++){
    nombres[i] = Number( prompt(`Le nombre ${i+1} est ?`));
    if ( (min === undefined)||(nombres[i] < min) ){
        min = nombres[i];
        indexMin = i;
    }
    if ( (max === undefined)||(nombres[i] > max) ){
        max = nombres[i];
        indexMax = i;
    }
}

alert(nombres)
alert(`Le plus petit des nombres que vous avez saisi est ${min} et son rang est ${indexMin}\n  
        Le plus grand des nombres que vous avez saisi est ${max} et son rang est ${indexMax}`);
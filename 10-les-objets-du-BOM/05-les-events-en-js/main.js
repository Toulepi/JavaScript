let p1 = document.querySelector('p');
p1.addEventListener('mouseover', function () {  // ici on a une fonction de rappel car elle est en paramètre d'une autre fonction "addEventListener"
    // à la place de 'click', on peut utiliser le double click via le mot clé "dblclick"
    this.innerHTML = "<h2>Bravo vous venez de me cliquer!</h2>";
    this.style.color = 'red';
    this.style.textTransform = "uppercase";
});

let p2 = document.querySelectorAll('p')[1];
console.log(p2);

p2.addEventListener('mouseleave', function () {

    this.style.color = 'blue';
    this.innerHTML = "<h2>Vous survolez la zone du paragraphe h2!</h2>";
    this.style.textTransform = "uppercase";
});



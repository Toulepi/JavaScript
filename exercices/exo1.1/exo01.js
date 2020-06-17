let a,b,c;
a = prompt("a=");
b = prompt("b=");
console.log(`Avant permutation`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);

c=a;
a=b;
b=c;

console.log(`Après permutation`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
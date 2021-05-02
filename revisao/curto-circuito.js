// CURTO CIRCUITO
/*
Quando necessario definir um valor padräo para parametros em uma função
*/
let n = 0;

n = n || 10;
// Vai atribuir valor ao n caso ele seja false e ZERO é false, logo atribui valor ao n
console.log(`n é igual a ${n}`);


let isValid = true;

isValid && console.log("é valido");
isValid || console.log("näo é valido");

console.log(0 && "ola")       // Como ZERO é falso, näo continua e mostra o falso (ZERO)
console.log("ola" && "mundo") // Ambos tem que ser verdadeiros e mostra somente o ultimo verdadeiro (mundo)
console.log("ola" || "mundo") // Apenas um tem que ser verdadeiros e mostra somente o ultimo verdadeiro (ola)
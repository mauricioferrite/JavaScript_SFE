let n1 = "10.245";
let n2 = 2;
let n3 = "10adasda2345";   // String comecando com numero
let n4 = "a10adasda2345";  // String comecando com letra
let n5 = "abc123def";
let n6 = "abc123def";

console.log("Se multiplicar number e string: " + n1 * n2, typeof n1, typeof n2);
console.log("Se somar number e string o que ooorre é a concatenação: " + n1 + n2, typeof n1, typeof n2+ "\n");

// CONVERSAO DE TIPOS
// parseFloat, parseInt, Number()

//  Usando parseFloat
n1 = parseFloat(n1);
n3 = parseFloat(n3);
n4 = parseFloat(n4);
n5 = Number(n5);
console.log("Apos a conversao com parseFloat" + "\n" + "So consegue converter se o primeiro caracter for numero");
console.log("Valor de n1: " + n1 + " e o Tipo de n1: " + typeof n1);
console.log("Valor de n3: " + n3 + " e o Tipo de n3: " + typeof n3);
console.log("Valor de n4: " + n4 + " e o Tipo de n4: " + typeof n4);
console.log("Valor de n5: " + n5 + " e o Tipo de n5: " + typeof n5 + "\n");

//  Usando parseInt
n1 = parseInt(n1);
n3 = parseInt(n3);
n4 = parseInt(n4);
console.log("Apos a conversao com parseInt" + "\n" + "So consegue converter se o primeiro caracter for numero");
console.log("Valor de n1: " + n1 + " e o Tipo de n1: " + typeof n1);
console.log("Valor de n3: " + n3 + " e o Tipo de n3: " + typeof n3);
console.log("Valor de n4: " + n4 + " e o Tipo de n4: " + typeof n4);

//  Usando Number
n5 = Number(n5);
n6 = Number(n6);
console.log("Apos a conversao com Number" + "\n" + "NAO consegue converter se houver em qualquer posição caracteres nao numericos");
console.log("Valor de n5: " + n5 + " e o Tipo de n5: " + typeof n5);
console.log("Valor de n6: " + n6 + " e o Tipo de n6: " + typeof n6 + "\n");






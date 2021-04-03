// strings, numbers (int, float), boolean 
// undefined, null e symbol (ES2015)

/* STRINGS */
let minhaVar = "minha string | ";
let minhaVar2 = 'minha "string" com aspas duplas | ';
let minhaVar3 = "minha 'string' com aspas simples | ";
let minhaVar4 = "minha \"string\" com aspas duplas, escapada | ";

var minhaVar5 = `minha string com template literal | `

/* Concatenação com aspas duplas e string literals com $*/
let idade = 40;
let msg = "Eu possuo " + idade + " anos." 
let msg2 = `Eu possuo ` + idade + ` anos.`
let msg3 = `Eu possuo ${idade} anos.`
var msg4 = `Eu possuo ${idade} anos.`

// console.log(minhaVar, minhaVar2, minhaVar3, minhaVar4, minhaVar5);
// console.log(msg);
// console.log(msg2);
// console.log(msg3);
// console.log(msg4);
// console.log(typeof msg4, typeof idade, typeof minhaVar);

/* NUMBERS */
const n1 = 10;
const n2 = 1.6;
// console.log(`O valor de n1 é ${n1} e seu tipo é ${typeof n1}, e o valor de n2 é ${n2} e seu tipo é ${typeof n2}.`);

/* BOOLEANOS */
const isValid = false;
// console.log(`const isValid is ${isValid}`);

/* UNDEFINED */
let varTeste;
console.log(`varTest is ${varTeste} e o tipo é ${typeof varTeste}`);
varTeste = 10;
console.log(`varTest is ${varTeste} e o tipo é ${typeof varTeste}`);

/* NULL */
let varTesteNull = null; 
console.log(`varTest is ${varTesteNull} e o tipo é ${typeof varTesteNull}`);
varTeste = 10;
console.log(`varTest is ${varTesteNull} e o tipo é ${typeof varTesteNull}`);
// Valor null é do tipo OBJECT!!!!


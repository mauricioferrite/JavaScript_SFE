// OPERADORES ARITMETICOS
// + Soma
// - Subtração
// * Multiplicação
// / Divisão
// % Mod . Resto da divisão
// ** Potenciação

//  Exemplos
n1 = 10;
n2 = 5;
console.log("OPERADORES ARITMETICOS");
console.log("Valor de n1: " + n1 + " e o Tipo de n1: " + typeof n1);
console.log("Valor de n2: " + n2 + " e o Tipo de n2: " + typeof n2);
console.log("Valor da Subtração (n1 - n2): " + (n1 - n2));
console.log("Valor da Multiplicação (n1 * n2): " + (n1 * n2));
console.log("Valor da Divisão (n1 / n2): " + (n1 / n2));
console.log("Valor da Mod . Resto da divisão (n1 % n2): " + (n1 % n2));
console.log("Valor da Potenciação (n1 ** n2): " + (n1 ** n2) + "\n\n");

// OPERADORES DE ATRIBUIÇÃO
// Atribui valor à variável
let n3 = 21;
console.log("OPERADORES ARITMETICOS");
console.log("n3 = " + n3);
n3 += 15;
console.log("n3 += 15");
console.log("Recebe ele mesmo e soma 15, que resulta em " + n3);
n3 -= 15;
console.log("n3 -= 15");
console.log("Recebe ele mesmo e subtrai 15, que resulta em " + n3);
n3 *= 2;
console.log("n3 *= 2");
console.log("Recebe ele mesmo e multiplica por 2, que resulta em " + n3);
n3 /= 3;
console.log("n3 /= 3");
console.log("Recebe ele mesmo e divide por 2, que resulta em " + n3);
n3 %= 2;
console.log("n3 %= 2");
console.log("Recebe ele mesmo e divide por 2 e exibe o resto dessa divisão, que resulta em " + n3);
n3 **= 2;
console.log("n3 **= 2");
console.log("Recebe ele mesmo e eleva ao quadrado 2, que resulta em " + n3 + "\n\n");


// OPERADORES DE INCREMENTO E DECREMENTO
// Soma ou subtrai
let i = 0;
console.log("OPERADORES DE INCREMENTO E DECREMENTO");
console.log("diferenças entre i++ e ++i");
console.log("i = " + i);
console.log("i++ = " + i++ + " -> Mostrou primeiro valor de i ZERO e depois somou 1.");
console.log("++i = " + ++i + " -> Primeiro somou 1 ao valor de i (que já era 1), somou um e mostrou i.");
i = 0;
console.log("i = " + i);
console.log("i-- = " + i-- + " -> Mostrou primeiro valor de i ZERO e depois subtraiu 1.");
console.log("--i = " + --i + " -> Primeiro subtraiu 1 do valor de i (que já era -1), subtraiu um e mostrou i. \n\n");

// OPERADORES DE COMPARAÇÃO
/*
==    Igualdade de valor
===   Igualdade de valor e tipo
> Maior, < Menor, >= Maior ou Igual, <= Menor ou Igual
!=    Valores diferente
!==   Valores e Tipos diferentes
*/
console.log("OPERADORES DE COMPARAÇÃO");
console.log(n1, n2, n3);

console.log(n1 == 10);
console.log(n1 === 10);
console.log(n1 >= 10);
console.log(n1 >= 11);


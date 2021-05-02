// IF e ELSE
/*
m
*/
let idade = 18;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = ( idade > 18 || paisPresentes) && comprouBilhete;

if(comprouBilhete) {
    console.log("Sim, comprou");
} else {
    console.log("Näo comprou");
}

if(!comprouBilhete) {
    console.log("Näo comprou");
} else {
    if (idade >= 18) {
    console.log("É maior de idade");
    } else {
        console.log("É menor de idade.")
    }
}

// OPERADOR TERNARIO
let msgMaiorIdade = (idade >= 18) ? "MAIOR de idade" : "MENOR de idade";
console.log(msgMaiorIdade);



let n1 = 5;
let n2 = 6;
let media = (n1 + n2) / 2;
console.log(`\nMedia ${media}`);

if (n1 === 0 || n2 === 0){
    console.log("Reprovado");
} else if (media <= 4){
        console.log("Reprovado")
} else {
        console.log("Aprovado!");
}
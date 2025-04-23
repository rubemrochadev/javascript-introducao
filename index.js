// //Questão1
// let idadeMinima = 17;
// if(idadeMinima >= 18){
// console.log("Maior de idade");
// }else{
//     console.log("Menor de idade");
// }

// //Questão2
// let numero = 0;

// if(numero > 0 ){
// console.log("Positivo");
} else if(numero == 0){
    console.log("Zero");
}
else{
    console.log("Negativo");
}

//Questão 3

let numeroA = 5;
let numeroB = 5;

if(numeroA > numeroB){
    console.log(`${numeroA} é maior que ${numeroB}`);
}else if(numeroB > numeroA){
    console.log(`${numeroB} é maior que ${numeroA}`);
} else {
    console.log("os números são iguais");
}

//Questão 4

let numero = 4;

if((numero % 2) ==0){
    console.log(`${numero} é par!`);
}else{
    console.log(`${numero} é impar!`);
}

// Questão 5



let notaA = 9;
let notaB = 4;
let notaC = 5;
let media = (( notaA + notaB + notaC) /3).toFixed(1);
let situacao = ""

if (media >= 7) {
    situacao = "Aprovado";
}else if (media > 5 && media < 7) {
    situacao = "Recuperação";   
}else {(media < 5 && media < 7) 
    situacao = "Reprovado";
}

    console.log(`${situacao}, média: ${media}`);

    Questão 6

    let valor = 198;
    let desconto = 0.1;
    if (valor > 100){
        console.log(`total a pagar: R$ ${(valor - (valor * desconto)).toFixed(2)}`);
        }else{
            console.log(`total a pagar:R$ ${valor.toFixed(2)}`);
            
        }
        
    
let ano = 2023;
if (ano %)



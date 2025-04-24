// //Questão 1 - Verificação de Idade:Escreva um programa que recebe a idade de uma pessoa e imprime "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário.

// let idadeMinima = 17;
// if(idadeMinima >= 18){
// console.log("Maior de idade");
// }else{
//     console.log("Menor de idade");
// }

// //Questão 2 - Número Positivo, Negativo ou Zero: Solicite um número ao usuário e exiba se ele é positivo, negativo ou zero.

// let numero = 0;

// if(numero > 0 ){
// console.log("Positivo");
// } else if(numero == 0){
//     console.log("Zero");
// }
// else{
//     console.log("Negativo");
// }

// //Questão 3 - Maior entre Dois Números: Peça dois números e mostre qual é o maior. Se forem iguais, exiba "Os números são iguais".

// let numeroA = 5;
// let numeroB = 5;

// if(numeroA > numeroB){
//     console.log(`${numeroA} é maior que ${numeroB}`);
// }else if(numeroB > numeroA){
//     console.log(`${numeroB} é maior que ${numeroA}`);
// } else {
//     console.log("os números são iguais");
// }

// //Questão 4 - Par ou Ímpar: Peça um número e informe se ele é par ou ímpar.

// let numero = 4;

// if((numero % 2) ==0){
//     console.log(`${numero} é par!`);
// }else{
//     console.log(`${numero} é impar!`);
// }

// // Questão 5 - Cálculo de Média: Receba três notas de um aluno, calcule a média e exiba "Aprovado" se for 7 ou mais, "Recuperação" se for entre 5 e 6.9, e "Reprovado" se for abaixo de 5.



// let notaA = 9;
// let notaB = 4;
// let notaC = 5;
// let media = (( notaA + notaB + notaC) /3).toFixed(1);
// let situacao = ""

// if (media >= 7) {
//     situacao = "Aprovado";
// }else if (media > 5 && media < 7) {
//     situacao = "Recuperação";   
// }else {(media < 5 && media < 7) 
//     situacao = "Reprovado";
// }

//     console.log(`${situacao}, média: ${media}`);

//  // Questão 6 - Desconto em Compra: Se o valor da compra for maior que R$100, aplique um desconto de 10% e exiba o novo valor.

// let valor = 620;
// let desconto = 0.35;
// if (valor > 100) {
//     console.log(`Total a pagar: R$ ${(valor - (valor * desconto)).toFixed(2)}`);
// } else {
//     console.log(`Total a pagar: R$ ${valor.toFixed(2)}`);
// }

// // Questão 7 - Verificação de Ano Bissexto: Peça um ano e verifique se é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).

// let ano = 2023;

// if (ano % 400 == 0) {
//     console.log(`${ano} é bisexto`);
// } else if (ano % 4 == 0 && ano % 100 != 0) {
//     console.log(`${ano} é bisexto`);
// } else {
//     console.log(`${ano} não é bisexto`);
// }


//Questão 8 - Acesso a um Sistema: Peça um nome de usuário e uma senha. Se forem "admin" e "1234", exiba "Acesso permitido", caso contrário, "Acesso negado".


// let usuario = "rubem";
// let senha = 1234;
// let situacao = "";

// if (usuario === "rubem" && senha === 1234) {
//     situacao = "Acesso Liberado";
// } else {
//     situacao = "Acesso Negado";
// }

// console.log(situacao);

// Questão 9 - Se o valor da compra for maior ou igual a R$200, ofereça frete grátis, caso contrário, cobre R$20.

// let valor = 190;
// let frete;
// let total;

// if (valor >= 200) {
//     frete = 0;
// } else {
//     frete = 20;
// }

// total = valor + frete;
// console.log(`Total a pagar: R$ ${total.toFixed(2)}`);

// 10 - Número dentro de um Intervalo: Solicite um número e exiba "Está no intervalo" se ele estiver entre 10 e 50, caso contrário, exiba "Fora do intervalo".

// let numero = 90
// if (numero =>10 && numero <=60){
//     console.log("Está no intervalo");}    
//     else {
//         ("Não está no intervalo");
// }



